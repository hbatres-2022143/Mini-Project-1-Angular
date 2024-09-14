import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from '../../services/dogs-service.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogImageUrl = '';
  userInput = '';

  constructor(private dogsService: DogsServiceService) {}

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
