import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonGradientBgComponent } from './link-button-gradient-bg.component';

describe('LinkButtonGradientBgComponent', () => {
  let component: LinkButtonGradientBgComponent;
  let fixture: ComponentFixture<LinkButtonGradientBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButtonGradientBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkButtonGradientBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
