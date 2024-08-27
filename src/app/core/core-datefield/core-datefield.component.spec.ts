import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDatefieldComponent } from './core-datefield.component';

describe('CoreDatefieldComponent', () => {
  let component: CoreDatefieldComponent;
  let fixture: ComponentFixture<CoreDatefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreDatefieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreDatefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
