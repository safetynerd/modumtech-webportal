import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveJobsListComponent } from './active-jobs-list.component';

describe('ActiveJobsListComponent', () => {
  let component: ActiveJobsListComponent;
  let fixture: ComponentFixture<ActiveJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveJobsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
