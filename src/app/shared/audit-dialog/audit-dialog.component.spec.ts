import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDialogComponent } from './audit-dialog.component';

describe('AuditDialogComponent', () => {
  let component: AuditDialogComponent;
  let fixture: ComponentFixture<AuditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditDialogComponent]
    });
    fixture = TestBed.createComponent(AuditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
