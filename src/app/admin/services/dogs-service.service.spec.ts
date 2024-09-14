import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DogsServiceService } from './dogs-service.service';

describe('DogsService', () => {
  let service: DogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogsServiceService]
    });
    service = TestBed.inject(DogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
