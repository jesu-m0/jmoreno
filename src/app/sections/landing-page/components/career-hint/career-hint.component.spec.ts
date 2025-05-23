import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerHintComponent } from './career-hint.component';

describe('CareerHintComponent', () => {
  let component: CareerHintComponent;
  let fixture: ComponentFixture<CareerHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerHintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
