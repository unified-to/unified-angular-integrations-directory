import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedAngularDirectoryComponent } from './unified-angular-directory.component';

describe('UnifiedAngularDirectoryComponent', () => {
  let component: UnifiedAngularDirectoryComponent;
  let fixture: ComponentFixture<UnifiedAngularDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnifiedAngularDirectoryComponent]
    });
    fixture = TestBed.createComponent(UnifiedAngularDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
