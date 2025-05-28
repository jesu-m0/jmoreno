import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeHintComponent } from './about-me-hint.component';

describe('AboutMeHintComponent', () => {
  let component: AboutMeHintComponent;
  let fixture: ComponentFixture<AboutMeHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeHintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
