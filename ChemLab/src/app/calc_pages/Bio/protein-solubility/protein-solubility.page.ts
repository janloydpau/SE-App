import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';  // Import ToastController

@Component({
  selector: 'app-protein-solubility',
  templateUrl: './protein-solubility.page.html',
  styleUrls: ['./protein-solubility.page.scss'],
})
export class ProteinSolubilityPage implements OnInit {
  units = [
    { name: 'grams per liter', symbol: 'g/L', multiplier: 1 },
    { name: 'grams per milliliter', symbol: 'g/mL', multiplier: 0.001 },
    { name: 'milligrams per liter', symbol: 'mg/L', multiplier: 1000 },
    { name: 'milligrams per milliliter', symbol: 'mg/mL', multiplier: 1 },
  ];

  // Unit options for weight (μg to kg)
  weightUnits = [
    { name: 'micrograms', symbol: 'μg', multiplier: 1e6 },
    { name: 'milligrams', symbol: 'mg', multiplier: 1000 },
    { name: 'grams', symbol: 'g', multiplier: 1 },
    { name: 'decagrams', symbol: 'dag', multiplier: 0.1 },
    { name: 'kilograms', symbol: 'kg', multiplier: 0.001 },
    { name: 'grains', symbol: 'gr', multiplier: 15432.3584 },
    { name: 'ounces', symbol: 'oz', multiplier: 35.274 },
    { name: 'pounds', symbol: 'lb', multiplier: 2.20462 },
  ];

  // Input fields
  blankTiter: number = NaN; // Blank Titer (B)
  titer: number = NaN; // Titer (T)
  selectedUnit: string = 'g/L'; // Default unit for Normality
  displayValue: number = NaN; // Normality value (NaOH concentration)
  selectedWeightUnit: string = 'g'; // Default unit for weight
  weightDisplayValue: number = NaN; // Effective weight value
  proteinSolubilityPercentage: number = NaN; // The calculated protein solubility percentage (P)

  // Additional variables for calculation
  originalValue: number = NaN; // Normality value in base unit
  originalWeightValue: number = NaN; // Effective weight value in base unit

  constructor(private toastController: ToastController) {}  // Inject ToastController

  ngOnInit() {}

  // Handle input change for Normality (NaOH concentration)
  onInputChange(event: any) {
    const inputValue = parseFloat(event.target.value);
    if (!isNaN(inputValue)) {
      this.originalValue = inputValue / this.getUnitMultiplier(this.selectedUnit);
      this.updateProteinSolubility();
    }
  }

  // Handle unit change for Normality
  onUnitChange(event: any) {
    this.updateDisplayValue();
  }

  // Handle weight input change
  onWeightInputChange(event: any) {
    const enteredValue = parseFloat(event.target.value);
    if (!isNaN(enteredValue)) {
      this.originalWeightValue = enteredValue / this.getWeightUnitMultiplier(this.selectedWeightUnit);
      this.updateProteinSolubility();
    }
  }

  // Handle weight unit change
  onWeightUnitChange(event: any) {
    this.updateWeightDisplayValue();
  }

  // Update Normality display value
  updateDisplayValue() {
    this.displayValue = this.originalValue * this.getUnitMultiplier(this.selectedUnit);
  }

  // Update Effective weight display value
  updateWeightDisplayValue() {
    this.weightDisplayValue = this.originalWeightValue * this.getWeightUnitMultiplier(this.selectedWeightUnit);
  }

  // Get multiplier for Normality unit
  getUnitMultiplier(unit: string): number {
    const selected = this.units.find(u => u.symbol === unit);
    return selected ? selected.multiplier : 1;
  }

  // Get multiplier for Effective weight unit
  getWeightUnitMultiplier(unit: string): number {
    const selected = this.weightUnits.find(u => u.symbol === unit);
    return selected ? selected.multiplier : 1;
  }

  // Update Protein Solubility when all inputs are filled
  onInputsChange() {
    if (!isNaN(this.blankTiter) && !isNaN(this.titer) && !isNaN(this.displayValue) && !isNaN(this.weightDisplayValue)) {
      this.updateProteinSolubility();
    }
  }

  // Calculate Protein Solubility Percentage (P)
  updateProteinSolubility() {
    if (!isNaN(this.blankTiter) && !isNaN(this.titer) && !isNaN(this.displayValue) && !isNaN(this.weightDisplayValue)) {
      const normality = this.displayValue;
      const effectiveWeight = this.weightDisplayValue;
      const blankTiter = this.blankTiter;
      const titer = this.titer;

      // Example formula for calculating Protein Solubility Percentage (P)
      this.proteinSolubilityPercentage = (1.401 * 6.25 * 5 * (blankTiter - titer) * (normality / effectiveWeight));

      // Check if the solubility percentage exceeds 100 and show the toast
      if (this.proteinSolubilityPercentage > 100) {
        this.presentToast();
      }
    }
  }

  // Show toast if percentage is greater than 100
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Percentage must always be at or below 100',
      duration: 3000,
      color: 'danger',
    });
    toast.present();
  }

  // Clear input fields
  clearFields() {
    this.blankTiter = NaN;
    this.titer = NaN;
    this.selectedUnit = 'g/L';
    this.displayValue = NaN;
    this.selectedWeightUnit = 'g';
    this.weightDisplayValue = NaN;
    this.proteinSolubilityPercentage = NaN;
  }
}
