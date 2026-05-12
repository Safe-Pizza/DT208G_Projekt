import { TestBed } from '@angular/core/testing';

import { CourseschemaService } from './courseschema-service';

describe('CourseschemaService', () => {
  let service: CourseschemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseschemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
