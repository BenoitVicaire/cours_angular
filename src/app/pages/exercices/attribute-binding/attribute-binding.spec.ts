import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttributeBinding } from './attribute-binding';

describe('AttributeBinding', () => {
  let component: AttributeBinding;
  let fixture: ComponentFixture<AttributeBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributeBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
