import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedDirectory } from './unified-angular-directory.component';

describe('UnifiedDirectory', () => {
  let component: UnifiedDirectory;
  let fixture: ComponentFixture<UnifiedDirectory>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnifiedDirectory],
    });
    fixture = TestBed.createComponent(UnifiedDirectory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
