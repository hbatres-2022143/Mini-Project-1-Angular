import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirective } from './directives/white-space.directive';
import { AuditDialogComponent } from './audit-dialog/audit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WhiteSpaceDirective, AuditDialogComponent],
  exports: [WhiteSpaceDirective, AuditDialogComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule]
})
export class SharedModule {}
