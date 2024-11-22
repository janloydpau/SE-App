import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apk',
  templateUrl: './apk.page.html',
  styleUrls: ['./apk.page.scss'],
})
export class ApkPage implements OnInit {

  ngOnInit() {}

  selectedSegment: string = 'fromph'; // Default segment
  selectedUnitConjugate: string = 'M'; // Default unit for Conjugate Base
  selectedUnitAcid: string = 'M'; // Default unit for Weak Acid
  Ka: number = NaN; // Variable for Ka (input by user)
  pKa_frompH: number = NaN; // pKa calculated from pH, conjugate base, and weak acid concentrations
  pKa_fromKa: number = NaN; // pKa calculated from Ka value
  pH: number = NaN; // pH variable
  rawConjugateBaseValue: number = NaN;
  rawWeakAcidValue: number = NaN;
  displayConjugateBaseValue: number = NaN;
  displayWeakAcidValue: number = NaN;

  // Unit options
  units = [
    { name: 'Molar', symbol: 'M', multiplier: 1 },
    { name: 'Millimolar', symbol: 'mM', multiplier: 1e3 },
    { name: 'Micromolar', symbol: 'µM', multiplier: 1e6 },
    { name: 'Nanomolar', symbol: 'nM', multiplier: 1e9 },
    { name: 'Picomolar', symbol: 'pM', multiplier: 1e12 },
    { name: 'Femtomolar', symbol: 'fM', multiplier: 1e15 },
    { name: 'Attomolar', symbol: 'aM', multiplier: 1e18 },
    { name: 'Zeptomolar', symbol: 'zM', multiplier: 1e21 },
    { name: 'Joktomolar', symbol: 'yM', multiplier: 1e24 }
  ];

  // Function that runs when the segment changes
  onSegmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.calculatePKA(); // Recalculate pKa when switching segments
  }

  // Convert concentration to the selected unit
  convertToSelectedUnit(rawValue: number, selectedUnit: string): number {
    const unit = this.units.find(u => u.symbol === selectedUnit);
    return unit ? rawValue * unit.multiplier : rawValue;
  }

  // Handle input for conjugate base concentration
  onConjugateBaseChange(event: any) {
    const enteredValue = event.target.value;
    this.rawConjugateBaseValue = enteredValue / this.getUnitMultiplier(this.selectedUnitConjugate);
    this.updateDisplayValues();
  }

  // Handle input for weak acid concentration
  onWeakAcidChange(event: any) {
    const enteredValue = event.target.value;
    this.rawWeakAcidValue = enteredValue / this.getUnitMultiplier(this.selectedUnitAcid);
    this.updateDisplayValues();
  }

  // Update display values and recalculate pKa
  updateDisplayValues() {
    this.displayConjugateBaseValue = this.convertToSelectedUnit(this.rawConjugateBaseValue, this.selectedUnitConjugate);
    this.displayWeakAcidValue = this.convertToSelectedUnit(this.rawWeakAcidValue, this.selectedUnitAcid);
    this.calculatePKA(); // Recalculate pKa whenever inputs change
  }

  // Get multiplier for a selected unit
  getUnitMultiplier(unit: string): number {
    const selectedUnit = this.units.find(u => u.symbol === unit);
    return selectedUnit ? selectedUnit.multiplier : 1;
  }

  // Calculate pKa value for both segments
  calculatePKA() {
    if (this.selectedSegment === 'fromph') {
      // pKa calculation based on pH, conjugate base, and weak acid concentrations
      if (isNaN(this.rawConjugateBaseValue) || isNaN(this.rawWeakAcidValue) || isNaN(this.pH)) {
        console.error('Invalid inputs for calculation.');
        return;
      }
      if (this.pH && !isNaN(this.pH)) { // Ensure pH is a valid number
        const ratio = this.rawConjugateBaseValue / this.rawWeakAcidValue;
        const logRatio = Math.log10(ratio);
        this.pKa_frompH = this.pH - logRatio;  // Store pKa value from pH
      } else {
        console.error('Invalid pH value for calculation');
      }
    }

    if (this.selectedSegment === 'fromka' && !isNaN(this.Ka)) {
      // pKa calculation based on Ka value (immediate calculation as user types)
      this.pKa_fromKa = -Math.log10(this.Ka);  // pKa = -log10(Ka)
    }
  }

  // Reset all fields
  clearFields() {
    this.pH = NaN;
    this.rawConjugateBaseValue = NaN;
    this.rawWeakAcidValue = NaN;
    this.pKa_frompH = NaN; // Reset pKa from pH value
    this.pKa_fromKa = NaN; // Reset pKa from Ka value
    this.selectedUnitConjugate = 'M';
    this.selectedUnitAcid = 'M';
    this.displayConjugateBaseValue = NaN;
    this.displayWeakAcidValue = NaN;
    this.Ka = NaN;  // Reset Ka value
  }
}
