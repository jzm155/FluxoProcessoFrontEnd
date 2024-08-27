import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComboboxComponent } from './core-combobox.component';

describe('CoreComboboxComponent', () => {
  let component: CoreComboboxComponent;
  let fixture: ComponentFixture<CoreComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreComboboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
