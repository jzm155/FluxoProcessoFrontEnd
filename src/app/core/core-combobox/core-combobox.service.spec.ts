import { TestBed } from '@angular/core/testing';

import { CoreComboboxService } from './core-combobox.service';

describe('CoreComboboxService', () => {
  let service: CoreComboboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreComboboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
