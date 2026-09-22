import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentCommunication } from './component-communication';

describe('ComponentCommunication', () => {
  let component: ComponentCommunication;
  let fixture: ComponentFixture<ComponentCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCommunication],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCommunication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
