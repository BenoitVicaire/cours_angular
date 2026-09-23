import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanierReactif } from './panier-reactif';

describe('PanierReactif', () => {
  let component: PanierReactif;
  let fixture: ComponentFixture<PanierReactif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierReactif],
    }).compileComponents();

    fixture = TestBed.createComponent(PanierReactif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
