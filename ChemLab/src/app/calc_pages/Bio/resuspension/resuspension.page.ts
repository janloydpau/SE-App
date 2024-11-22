import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resuspension',
  templateUrl: './resuspension.page.html',
  styleUrls: ['./resuspension.page.scss'],
})
export class ResuspensionPage implements OnInit {

  ngOnInit() {}

  // Default segment selected
  valueChange: string = 'changeIt';

  // Variables for the oligo, concentration, and diluent calculations
  rawOligoValue: number = NaN; // Raw value for oligo (before conversion)
  rawConcentrationValue: number = NaN; // Raw value for concentration (before conversion)
  rawDiluentValue: number = NaN; // Raw value for diluent (before conversion)

  inputValue: number = NaN; // The oligo value that is shown in the input field
  concentrationValue: number = NaN; // The concentration value that is shown in the input field
  diluentValue: number = NaN; // The diluent value that is shown in the input field

  // Unit options for oligo (M to pM)
  oligoUnits = [
    { name: 'moles', symbol: 'mol', multiplier: 1 },
    { name: 'millimoles', symbol: 'mmol', multiplier: 1e3 },
    { name: 'micromoles', symbol: 'µmol', multiplier: 1e6 },
    { name: 'nanomoles', symbol: 'nmol', multiplier: 1e9 },
    { name: 'picomoles', symbol: 'pmol', multiplier: 1e12 }
  ];

  // Unit options for concentration (M to yM)
  concentrationUnits = [
    { name: 'molar', symbol: 'M', multiplier: 1 },
    { name: 'millimolar', symbol: 'mM', multiplier: 1e3 },
    { name: 'micromolar', symbol: 'µM', multiplier: 1e6 },
    { name: 'nanomolar', symbol: 'nM', multiplier: 1e9 },
    { name: 'picomolar', symbol: 'pM', multiplier: 1e12 },
    { name: 'femtomolar', symbol: 'fM', multiplier: 1e15 },
    { name: 'attomolar', symbol: 'aM', multiplier: 1e18 },
    { name: 'zeptomolar', symbol: 'zM', multiplier: 1e21 },
    { name: 'joktomolar', symbol: 'yM', multiplier: 1e24 }
  ];

  // Unit options for diluent volume (microliters to cubic nanometer)
  diluentUnits = [
    { name: 'microliters', symbol: 'µL', multiplier: 1e6 },
    { name: 'milliliters', symbol: 'mL', multiplier: 1e3 },
    { name: 'liters', symbol: 'L', multiplier: 1 },
    { name: 'cubic nanometer', symbol: 'nm³', multiplier: 1e27 }
  ];

  // The units selected for the oligo, concentration, and diluent
  selectedOligoUnit: string = 'mol'; // Default unit for oligo
  selectedConcentrationUnit: string = 'M'; // Default unit for concentration
  selectedDiluentUnit: string = 'L'; // Default unit for diluent volume

  // Method when segment changes (optional, for switching between pKa and pH calculation)
  unitChanged(event: any) {
    this.valueChange = event.detail.value;
    this.updateDisplayValues();
  }

  // Convert raw value to the selected unit
  convertToSelectedUnit(rawValue: number, selectedUnit: string): number {
    const unit = this.oligoUnits.find(u => u.symbol === selectedUnit) || this.concentrationUnits.find(u => u.symbol === selectedUnit) || this.diluentUnits.find(u => u.symbol === selectedUnit);
    return unit ? rawValue * unit.multiplier : rawValue;
  }

  // Handle input for oligo concentration
  onOligoInputChange(event: any) {
    const enteredValue = event.target.value;
    this.rawOligoValue = enteredValue / this.getUnitMultiplier(this.selectedOligoUnit);
    this.calculateValues('oligo'); // Recalculate other values when oligo is entered
  }

  // Handle input for concentration
  onConcentrationInputChange(event: any) {
    const enteredValue = event.target.value;
    this.rawConcentrationValue = enteredValue / this.getUnitMultiplier(this.selectedConcentrationUnit);
    this.calculateValues('concentration'); // Recalculate other values when concentration is entered
  }

  // Handle input for diluent volume
  onDiluentInputChange(event: any) {
    const enteredValue = event.target.value;
    this.rawDiluentValue = enteredValue / this.getUnitMultiplier(this.selectedDiluentUnit);
    this.calculateValues('diluent'); // Recalculate other values when diluent is entered
  }

  // Recalculate values based on the updated input
  calculateValues(changed: string) {
    // Check which input was changed and calculate the others
    if (changed === 'oligo' && !isNaN(this.rawOligoValue) && !isNaN(this.rawConcentrationValue)) {
      this.rawDiluentValue = this.rawOligoValue / this.rawConcentrationValue; // Volume of diluent = Oligo / Concentration
    } else if (changed === 'concentration' && !isNaN(this.rawConcentrationValue) && !isNaN(this.rawOligoValue)) {
      this.rawDiluentValue = this.rawOligoValue / this.rawConcentrationValue;
    } else if (changed === 'diluent' && !isNaN(this.rawDiluentValue) && !isNaN(this.rawOligoValue)) {
      this.rawConcentrationValue = this.rawOligoValue / this.rawDiluentValue; // Concentration = Oligo / Diluent volume
    }
    this.updateDisplayValues();
  }

  // Update the displayed values and recalculate (if needed)
  updateDisplayValues() {
    this.inputValue = this.convertToSelectedUnit(this.rawOligoValue, this.selectedOligoUnit);
    this.concentrationValue = this.convertToSelectedUnit(this.rawConcentrationValue, this.selectedConcentrationUnit);
    this.diluentValue = this.convertToSelectedUnit(this.rawDiluentValue, this.selectedDiluentUnit);
  }

  // Get multiplier for a selected unit
  getUnitMultiplier(unit: string): number {
    const selectedUnit = this.oligoUnits.find(u => u.symbol === unit) || this.concentrationUnits.find(u => u.symbol === unit) || this.diluentUnits.find(u => u.symbol === unit);
    return selectedUnit ? selectedUnit.multiplier : 1;
  }

  // Clear all fields
  clearFields() {
    this.rawOligoValue = NaN;
    this.rawConcentrationValue = NaN;
    this.rawDiluentValue = NaN;
    this.inputValue = NaN;
    this.concentrationValue = NaN;
    this.diluentValue = NaN;
    this.selectedOligoUnit = 'mol';
    this.selectedConcentrationUnit = 'M';
    this.selectedDiluentUnit = 'L';
  }
}
