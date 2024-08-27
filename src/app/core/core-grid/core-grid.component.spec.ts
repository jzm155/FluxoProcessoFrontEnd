import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreGridComponent } from './core-grid.component';

describe('CoreGridComponent', () => {
  let component: CoreGridComponent;
  let fixture: ComponentFixture<CoreGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
