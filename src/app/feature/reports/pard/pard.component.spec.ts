import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PardComponent } from './pard.component';

describe('PardComponent', () => {
  let component: PardComponent;
  let fixture: ComponentFixture<PardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
