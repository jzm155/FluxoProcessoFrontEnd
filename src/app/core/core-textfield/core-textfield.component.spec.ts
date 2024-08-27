import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTextfieldComponent } from './core-textfield.component';

describe('CoreTextfieldComponent', () => {
  let component: CoreTextfieldComponent;
  let fixture: ComponentFixture<CoreTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreTextfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
