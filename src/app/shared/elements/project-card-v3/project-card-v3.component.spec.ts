import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardV3Component } from './project-card-v3.component';

describe('ProjectCardV3Component', () => {
  let component: ProjectCardV3Component;
  let fixture: ComponentFixture<ProjectCardV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
