import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysourceComponent } from './surveysource.component';

describe('SurveysourceComponent', () => {
  let component: SurveysourceComponent;
  let fixture: ComponentFixture<SurveysourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
