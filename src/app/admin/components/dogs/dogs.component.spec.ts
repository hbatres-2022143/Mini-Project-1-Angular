import { DogsServiceService } from './../../services/dogs-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DogsComponent } from './dogs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [DogsComponent],
      providers: [DogsServiceService]
    }).compileComponents();

    fixture = TestBed.createComponent(DogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the DogsComponent', () => {
    expect(component).toBeTruthy();
  });
});
