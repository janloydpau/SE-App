import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProteinSolubilityPage } from './protein-solubility.page';

describe('ProteinSolubilityPage', () => {
  let component: ProteinSolubilityPage;
  let fixture: ComponentFixture<ProteinSolubilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinSolubilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
