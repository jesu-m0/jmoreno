import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSectionMobileComponent } from './skills-section-mobile.component';

describe('SkillsSectionMobileComponent', () => {
  let component: SkillsSectionMobileComponent;
  let fixture: ComponentFixture<SkillsSectionMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSectionMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
