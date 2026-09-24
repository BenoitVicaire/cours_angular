import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaireRegex } from './formulaire-regex';

describe('FormulaireRegex', () => {
  let component: FormulaireRegex;
  let fixture: ComponentFixture<FormulaireRegex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireRegex],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireRegex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
