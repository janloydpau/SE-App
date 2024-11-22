import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chemname',
  templateUrl: './chemname.page.html',
  styleUrls: ['./chemname.page.scss'],
})
export class ChemnamePage implements OnInit {
  selectedSegment: string = 'name'; // Default to "Name" segment
  
  // Variables to bind to the Name section dropdowns
  selectedCationName: string = '';
  selectedAnionName: string = '';

  // Variables to bind to the Formula section dropdowns
  selectedCationSymbol: string = '';
  selectedAnionSymbol: string = '';

  // Cation and Anion symbol/name dictionaries
  cationSymbols = [
    { symbol: "H⁺", name: "Hydrogen" },
    { symbol: "Li⁺", name: "Lithium" },
    { symbol: "Na⁺", name: "Sodium" },
    { symbol: "K⁺", name: "Potassium" },
    { symbol: "Rb⁺", name: "Rubidium" },
    { symbol: "Cs⁺", name: "Cesium" },
    { symbol: "Ag⁺", name: "Silver" },
    { symbol: "NH₄⁺", name: "Ammonium" },
    { symbol: "H₃O⁺", name: "Hydronium" },
    { symbol: "Mg²⁺", name: "Magnesium" },
    { symbol: "Ca²⁺", name: "Calcium" },
    { symbol: "Sr²⁺", name: "Strontium" },
    { symbol: "Ba²⁺", name: "Barium" },
    { symbol: "Zn²⁺", name: "Zinc" },
    { symbol: "Fe²⁺", name: "Iron(II)" },
    { symbol: "Fe³⁺", name: "Iron(III)" },
    { symbol: "Cu⁺", name: "Copper(I)" },
    { symbol: "Cu²⁺", name: "Copper(II)" },
    { symbol: "Al³⁺", name: "Aluminum" },
    { symbol: "Cr²⁺", name: "Chromium(II)" },
    { symbol: "Cr³⁺", name: "Chromium(III)" },
    { symbol: "Mn²⁺", name: "Manganese(II)" },
    { symbol: "Mn³⁺", name: "Manganese(III)" },
    { symbol: "Pb²⁺", name: "Lead(II)" },
    { symbol: "Pb⁴⁺", name: "Lead(IV)" },
    { symbol: "Sn²⁺", name: "Tin(II)" },
    { symbol: "Sn⁴⁺", name: "Tin(IV)" },
    { symbol: "Hg²⁺", name: "Mercury(II)" },
    { symbol: "Hg₂²⁺", name: "Mercury(I)" },
    { symbol: "Co²⁺", name: "Cobalt(II)" },
    { symbol: "Co³⁺", name: "Cobalt(III)" },
    { symbol: "Ni²⁺", name: "Nickel(II)" },
    { symbol: "Ni³⁺", name: "Nickel(III)" },
    { symbol: "Bi³⁺", name: "Bismuth" },
    { symbol: "Cd²⁺", name: "Cadmium" },
    { symbol: "Tl⁺", name: "Thallium(I)" },
    { symbol: "Tl³⁺", name: "Thallium(III)" }
  ];

  anionSymbols = [
    { symbol: "C₂H₃O₂⁻", name: "Acetate" },
    { symbol: "NH₄⁻", name: "Ammonium" },
    { symbol: "AsO₄³⁻", name: "Arsenate" },
    { symbol: "N₃⁻", name: "Azide" },
    { symbol: "HCO₃⁻", name: "Bicarbonate" },
    { symbol: "HSO₄⁻", name: "Bisulfate" },
    { symbol: "BrO₃⁻", name: "Bromate" },
    { symbol: "Br⁻", name: "Bromide" },
    { symbol: "CO₃²⁻", name: "Carbonate" },
    { symbol: "ClO₃⁻", name: "Chlorate" },
    { symbol: "Cl⁻", name: "Chloride" },
    { symbol: "ClO₂⁻", name: "Chlorite" },
    { symbol: "CrO₄²⁻", name: "Chromate" },
    { symbol: "CN⁻", name: "Cyanide" },
    { symbol: "Cr₂O₇²⁻", name: "Dichromate" },
    { symbol: "H₂PO₄⁻", name: "Dihydrogen Phosphate" },
    { symbol: "F⁻", name: "Fluoride" },
    { symbol: "HCOO⁻", name: "Formate" },
    { symbol: "OH⁻", name: "Hydroxide" },
    { symbol: "IO₃⁻", name: "Iodate" },
    { symbol: "I⁻", name: "Iodide" },
    { symbol: "NO₃⁻", name: "Nitrate" },
    { symbol: "NO₂⁻", name: "Nitrite" },
    { symbol: "C₂O₄²⁻", name: "Oxalate" },
    { symbol: "O²⁻", name: "Oxide" },
    { symbol: "O₃⁻", name: "Ozone" },
    { symbol: "PO₄³⁻", name: "Phosphate" },
    { symbol: "P³⁻", name: "Phosphide" },
    { symbol: "SO₄²⁻", name: "Sulfate" },
    { symbol: "S²⁻", name: "Sulfide" },
    { symbol: "S₂O₃²⁻", name: "Thiosulfate" },
    { symbol: "HS⁻", name: "Hydrosulfide" },
    { symbol: "SCN⁻", name: "Thiocyanate" },
    { symbol: "MnO₄⁻", name: "Permanganate" },
    { symbol: "SiO₄⁴⁻", name: "Silicate" },
    { symbol: "SO₃²⁻", name: "Sulfite" },
    { symbol: "C₆H₅O₇²⁻", name: "Citrate" }
  ];

  compoundName: string = '';
  compoundFormula: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSegmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  
    // Clear dropdown selections
    this.selectedCationName = '';
    this.selectedAnionName = '';
    this.selectedCationSymbol = '';
    this.selectedAnionSymbol = '';
  
    // Reset compound information
    this.compoundName = '';
    this.compoundFormula = '';
  }
  

  generateCompound() {
    if (this.selectedSegment === 'name') {
      // Find the cation and anion symbols based on the selected names
      const selectedCation = this.cationSymbols.find(cation => cation.name === this.selectedCationName);
      const selectedAnion = this.anionSymbols.find(anion => anion.name === this.selectedAnionName);
  
      // Generate compound name and formula for the "Name" segment
      if (selectedCation && selectedAnion) {
        this.compoundName = `${this.selectedCationName} ${this.selectedAnionName}`;
        this.compoundFormula = `${selectedCation.symbol}${selectedAnion.symbol}`;
      } else {
        this.compoundName = '';
        this.compoundFormula = '';
      }
  
    } else if (this.selectedSegment === 'formula') {
      // Find the cation and anion names based on the selected symbols
      const selectedCation = this.cationSymbols.find(cation => cation.symbol === this.selectedCationSymbol);
      const selectedAnion = this.anionSymbols.find(anion => anion.symbol === this.selectedAnionSymbol);
  
      // Generate compound formula and name for the "Formula" segment
      if (selectedCation && selectedAnion) {
        this.compoundFormula = `${this.selectedCationSymbol}${this.selectedAnionSymbol}`;
        this.compoundName = `${selectedCation.name} ${selectedAnion.name}`;
      } else {
        this.compoundFormula = '';
        this.compoundName = '';
      }
    }
  }
  
  clearInputs() {
    // Clear cation and anion selections based on the active segment
    if (this.selectedSegment === 'name') {
      this.selectedCationName = '';
      this.selectedAnionName = '';
    } else if (this.selectedSegment === 'formula') {
      this.selectedCationSymbol = '';
      this.selectedAnionSymbol = '';
    }
  
    // Clear the compound name and formula display
    this.compoundName = '';
    this.compoundFormula = '';
  }
}
