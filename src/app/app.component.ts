import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1_is4tech';

  constructor(private router: Router) {}

  navigateToDogs() {
    this.router.navigate(['/dogs']);
  }
}
