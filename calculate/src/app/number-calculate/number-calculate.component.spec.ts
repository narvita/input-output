import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCalculateComponent } from './number-calculate.component';

describe('NumberCalculateComponent', () => {
  let component: NumberCalculateComponent;
  let fixture: ComponentFixture<NumberCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
