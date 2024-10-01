import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../../services/dogs-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AuditDialogComponent } from '../../../shared/audit-dialog/audit-dialog.component';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogImageUrl = '';
  userInput = '';

  constructor(
    private dogsService: DogsServiceService,
    public dialog: MatDialog
  ) {}

  userCreated = '';
  dateCreated = '31/12/0001 17:59:56';
  userUpdated = 'avasquez@is4tech.com';
  dateUpdated = '13/10/2022 10:59:33';

  openDialog(): void {
    this.dialog.open(AuditDialogComponent, {
      data: {
        userCreated: this.userCreated,
        dateCreated: this.dateCreated,
        userUpdated: this.userUpdated,
        dateUpdated: this.dateUpdated
      },
      panelClass: 'custom-dialog-container'
    });
  }

  ngOnInit(): void {
    this.loadNewDogImage();
  }

  loadNewDogImage(): void {
    this.dogsService.getDogImage().subscribe({
      next: data => {
        this.dogImageUrl = data.message;
      },
      error: error => {
        console.error('Error getting image', error);
      }
    });
  }
}
