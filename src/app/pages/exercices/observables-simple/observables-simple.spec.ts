import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablesSimple } from './observables-simple';

describe('ObservablesSimple', () => {
  let component: ObservablesSimple;
  let fixture: ComponentFixture<ObservablesSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
