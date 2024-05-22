import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { IIntegration, TIntegrationCategory } from './models/Unified';
import { CommonModule } from '@angular/common';

const API_NA_URL = 'https://api.unified.to';
const API_EU_URL = 'https://api-eu.unified.to';

type TIntegrationCategoryType = Exclude<TIntegrationCategory, 'auth' | 'passthrough'>;

@Component({
    imports: [CommonModule],
    standalone: true,
    selector: 'unified',
    template: `
        <div class="unified">
            <div class="unified_menu" *ngIf="!notabs && CATEGORIES.length > 0 && filter(INTEGRATIONS).length">
                <button class="unified_button unified_button_all" [ngClass]="{selectedCategory ? '' : 'active'}" (click)="unified_select_category()">
                    All
                </button>
                <button
                    *ngFor="let cat of CATEGORIES"
                    class="unified_button unified_button_"
                    [ngClass]="[cat,{selectedCategory === cat ? 'active' : ''}]"
                    (click)="unified_select_category(cat)"
                >
                    {{ CATEGORY_MAP[cat as TIntegrationCategory] }}
                </button>
            </div>
            <div class="unified_vendors">
                <a *ngFor="let integration of filter(INTEGRATIONS)" href="{unified_get_auth_url(integration)}" class="unified_vendor">
                    <img src="{integration.logo_url}" class="unified_image" />
                    <div class="unified_vendor_inner">
                        <div class="unified_vendor_name">{{ integration.name }}</div>
                        <div
                            *ngIf="!nocategories"
                            class="unified_vendor_cats"
                            *ngFor="let cat of integration.categories.filter((c) => !CATEGORIES || CATEGORIES.indexOf(c) > -1)"
                        >
                            <span>{{ CATEGORY_MAP[cat] }}</span>
                        </div>
                    </div>
                </a>
                <div *ngIf="!filter(INTEGRATIONS).length">No integrations available</div>
            </div>
        </div>
    `,
})
export class UnifiedAngularDirectoryComponent implements OnInit, OnChanges {
    @Input() INTEGRATIONS: IIntegration[] = [];
    @Input() selectedCategory?: TIntegrationCategory;
    @Input() CATEGORIES: TIntegrationCategory[] = [];
    @Input() CATEGORY_MAP: { [p in TIntegrationCategoryType]: string } = {
        crm: 'CRM',
        martech: 'Marketing',
        ticketing: 'Ticketing',
        uc: 'Unified Communications',
        enrich: 'Enrichment',
        ats: 'ATS',
        accounting: 'Accounting',
        storage: 'Storage',
        hris: 'HR',
        payment: 'Payment',
        commerce: 'E-Commerce',
        genai: 'Generative AI',
        messaging: 'Messaging',
        kms: 'KMS',
    };
    @Input() workspace_id?: { type: string; required: true };
    @Input() categories?: string[];
    @Input() external_xref?: string;
    @Input() state?: string;
    @Input() scopes?: string[];
    @Input() success_redirect?: string;
    @Input() failure_redirect?: string;
    @Input() nostyle?: boolean;
    @Input() environment?: string;
    @Input() lang?: string;
    @Input() nocategories?: boolean;
    @Input() notabs?: boolean;
    @Input() dc?: 'us' | 'eu'; // which data-center

    async ngOnInit() {
        await this.setup();
    }

    async ngOnChanges(changes: SimpleChanges) {
        if (
            changes['workspaceId'].currentValue !== changes['workspaceId'].previousValue ||
            changes['categories'].currentValue !== changes['categories'].previousValue ||
            changes['environment'].currentValue !== changes['environment'].previousValue
        ) {
            await this.setup();
        }
    }

    filter(integrations: IIntegration[]) {
        return integrations?.filter((integration) => !this.selectedCategory || integration.categories.includes(this.selectedCategory)) || [];
    }

    unified_get_auth_url(integration: IIntegration) {
        const APIURL = this.dc === 'eu' ? API_EU_URL : API_NA_URL;

        let url = `${APIURL}/unified/integration/auth/${this.workspace_id}/${integration.type}?redirect=1`;

        if (this.external_xref) {
            url += `&external_xref=${encodeURIComponent(this.external_xref)}`;
        }
        if (this.state) {
            url += `&state=${encodeURIComponent(this.state)}`;
        }
        if (this.scopes?.length) {
            url += `&scopes=${encodeURIComponent(this.scopes.join(','))}`;
        }
        if (this.lang) {
            url += `&lang=${this.lang}`;
        }
        if (this.environment && this.environment !== 'Production') {
            url += `&env=${encodeURIComponent(this.environment)}`;
        }
        // if (this.success_redirect) {
        url += `&success_redirect=${encodeURIComponent(this.success_redirect || window.location.href)}`;
        // }
        // if (this.failure_redirect) {
        url += `&failure_redirect=${encodeURIComponent(this.failure_redirect || window.location.href)}`;
        // }
        return url;
    }

    unified_select_category(category?: TIntegrationCategory) {
        this.selectedCategory = category;
    }

    async load_data<T>(url: string) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.json() as T;
        } catch {
            return;
        }
    }

    async setup() {
        const APIURL = this.dc === 'eu' ? API_EU_URL : API_NA_URL;

        this.selectedCategory = undefined;
        const url = `${APIURL}/unified/integration/workspace/${this.workspace_id}?summary=1${
            this.categories?.length ? '&categories=' + this.categories.join(',') : ''
        }${this.environment === 'Production' || !this.environment ? '' : '&env=' + encodeURIComponent(this.environment)}`;

        this.INTEGRATIONS = (await this.load_data<IIntegration[]>(url)) || [];

        this.CATEGORIES = [];
        this.INTEGRATIONS.forEach((integration) => {
            integration.categories?.forEach((c) => {
                if (this.CATEGORY_MAP[c as TIntegrationCategoryType] && (!this.categories?.length || this.categories.includes(c))) {
                    this.CATEGORIES.push(c);
                }
            });
        });
        this.CATEGORIES = [...new Set(this.CATEGORIES)];
        if (this.CATEGORIES.length === 1) {
            this.CATEGORIES = [];
        } else {
            this.CATEGORIES = this.CATEGORIES.sort(function (a, b) {
                return a.localeCompare(b);
            });
        }

        if (!this.nostyle) {
            const link = document.createElement('link');
            link.href = `${APIURL}/docs/unified.css`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }
}
