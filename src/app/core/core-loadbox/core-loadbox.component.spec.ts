import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLoadboxComponent } from './core-loadbox.component';

describe('CoreLoadboxComponent', () => {
  let component: CoreLoadboxComponent;
  let fixture: ComponentFixture<CoreLoadboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreLoadboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreLoadboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
