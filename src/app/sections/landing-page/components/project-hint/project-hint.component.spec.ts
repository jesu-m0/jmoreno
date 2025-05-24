import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHintComponent } from './project-hint.component';

describe('ProjectHintComponent', () => {
  let component: ProjectHintComponent;
  let fixture: ComponentFixture<ProjectHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
