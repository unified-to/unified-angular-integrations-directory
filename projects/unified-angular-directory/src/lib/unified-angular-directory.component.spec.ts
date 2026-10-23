import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedDirectory } from './unified-angular-directory.component';

// What the workspace integrations endpoint returns; the spy records the request URL
const INTEGRATIONS = [
  { type: 'hubspot', name: 'HubSpot', categories: ['crm', 'martech'], logo_url: '/hubspot.png' },
  { type: 'greenhouse', name: 'Greenhouse', categories: ['ats', 'hris'], logo_url: '/greenhouse.png' },
];

describe('UnifiedDirectory', () => {
  let component: UnifiedDirectory;
  let fixture: ComponentFixture<UnifiedDirectory>;
  let requested: string[];

  beforeEach(() => {
    requested = [];
    spyOn(window, 'fetch').and.callFake(async (url: RequestInfo | URL) => {
      requested.push(String(url));
      return new Response(JSON.stringify(INTEGRATIONS), { status: 200 });
    });

    // the component is standalone, so it is imported, not declared
    TestBed.configureTestingModule({
      imports: [UnifiedDirectory],
    });
    fixture = TestBed.createComponent(UnifiedDirectory);
    component = fixture.componentInstance;
    component.workspace_id = 'ws_123';
    component.nostyle = true;
  });

  async function render(inputs: Partial<Pick<UnifiedDirectory, 'categories' | 'scopes'>>) {
    Object.assign(component, inputs);
    await component.setup();
    const listUrl = new URL(requested[requested.length - 1]);
    const authUrls = component.INTEGRATIONS.map((integration) => new URL(component.unified_get_auth_url(integration)));
    return { listUrl, authUrls };
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('categories and scopes (backward compatibility)', () => {
    it('without categories or scopes: no filter, and auth links request no scopes (unchanged)', async () => {
      const { listUrl, authUrls } = await render({});
      expect(listUrl.searchParams.has('categories')).toBeFalse();
      expect(authUrls.map((url) => url.pathname)).toEqual(['/unified/integration/auth/ws_123/hubspot', '/unified/integration/auth/ws_123/greenhouse']);
      expect(authUrls.every((url) => !url.searchParams.has('scopes'))).toBeTrue();
    });

    it('with categories: filters by them (unchanged)', async () => {
      const { listUrl } = await render({ categories: ['crm'] });
      expect(listUrl.searchParams.get('categories')).toBe('crm');
    });

    it('with scopes only: filters by the categories of the scopes and requests the scopes', async () => {
      const { listUrl, authUrls } = await render({ scopes: ['crm_contact_read', 'martech_list_read', 'webhook'] });
      expect(listUrl.searchParams.get('categories')).toBe('crm,martech');
      expect(authUrls[0].searchParams.get('scopes')).toBe('crm_contact_read,martech_list_read,webhook');
    });

    it('with categories and scopes: categories win', async () => {
      const { listUrl, authUrls } = await render({ categories: ['ats'], scopes: ['crm_contact_read'] });
      expect(listUrl.searchParams.get('categories')).toBe('ats');
      expect(authUrls[0].searchParams.get('scopes')).toBe('crm_contact_read');
    });
  });
});
