import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionProblemsComponent } from './change-detection-problems.component';

describe('ChangeDetectionProblemsComponent', () => {
  let component: ChangeDetectionProblemsComponent;
  let fixture: ComponentFixture<ChangeDetectionProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionProblemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
