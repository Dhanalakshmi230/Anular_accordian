import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordianComponent } from './acordian.component';

describe('AcordianComponent', () => {
  let component: AcordianComponent;
  let fixture: ComponentFixture<AcordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
