import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVideoCarouselComponent } from './photo-video-carousel.component';

describe('PhotoVideoCarouselComponent', () => {
  let component: PhotoVideoCarouselComponent;
  let fixture: ComponentFixture<PhotoVideoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoVideoCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoVideoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
