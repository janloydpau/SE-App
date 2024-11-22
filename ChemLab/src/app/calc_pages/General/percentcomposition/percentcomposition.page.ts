import { Component, OnInit } from '@angular/core';

interface ElementData {
  symbol: string;
  mass: number;
  percentage: number;
}

@Component({
  selector: 'app-percentcomposition',
  templateUrl: './percentcomposition.page.html',
  styleUrls: ['./percentcomposition.page.scss'],
})
export class PercentcompositionPage implements OnInit {

    // Define options for the dropdown menus, listing elements from Hydrogen to Neon
    elementOptions = [
      { label: 'Hydrogen (H)', value: 'H' },
      { label: 'Helium (He)', value: 'He' },
      { label: 'Lithium (Li)', value: 'Li' },
      { label: 'Beryllium (Be)', value: 'Be' },
      { label: 'Boron (B)', value: 'B' },
      { label: 'Carbon (C)', value: 'C' },
      { label: 'Nitrogen (N)', value: 'N' },
      { label: 'Oxygen (O)', value: 'O' },
      { label: 'Fluorine (F)', value: 'F' },
      { label: 'Neon (Ne)', value: 'Ne' },
      { label: 'Sodium (Na)', value: 'Na' },
      { label: 'Magnesium (Mg)', value: 'Mg' },
      { label: 'Aluminum (Al)', value: 'Al' },
      { label: 'Silicon (Si)', value: 'Si' },
      { label: 'Phosphorus (P)', value: 'P' },
      { label: 'Sulfur (S)', value: 'S' },
      { label: 'Chlorine (Cl)', value: 'Cl' },
      { label: 'Argon (Ar)', value: 'Ar' },
      { label: 'Potassium (K)', value: 'K' },
      { label: 'Calcium (Ca)', value: 'Ca' },
      { label: 'Scandium (Sc)', value: 'Sc' },
      { label: 'Titanium (Ti)', value: 'Ti' },
      { label: 'Vanadium (V)', value: 'V' },
      { label: 'Chromium (Cr)', value: 'Cr' },
      { label: 'Manganese (Mn)', value: 'Mn' },
      { label: 'Iron (Fe)', value: 'Fe' },
      { label: 'Cobalt (Co)', value: 'Co' },
      { label: 'Nickel (Ni)', value: 'Ni' },
      { label: 'Copper (Cu)', value: 'Cu' },
      { label: 'Zinc (Zn)', value: 'Zn' },
      { label: 'Gallium (Ga)', value: 'Ga' },
      { label: 'Germanium (Ge)', value: 'Ge' },
      { label: 'Arsenic (As)', value: 'As' },
      { label: 'Selenium (Se)', value: 'Se' },
      { label: 'Bromine (Br)', value: 'Br' },
      { label: 'Krypton (Kr)', value: 'Kr' },
      { label: 'Rubidium (Rb)', value: 'Rb' },
      { label: 'Strontium (Sr)', value: 'Sr' },
      { label: 'Yttrium (Y)', value: 'Y' },
      { label: 'Zirconium (Zr)', value: 'Zr' },
      { label: 'Niobium (Nb)', value: 'Nb' },
      { label: 'Molybdenum (Mo)', value: 'Mo' },
      { label: 'Technetium (Tc)', value: 'Tc' },
      { label: 'Ruthenium (Ru)', value: 'Ru' },
      { label: 'Rhodium (Rh)', value: 'Rh' },
      { label: 'Palladium (Pd)', value: 'Pd' },
      { label: 'Silver (Ag)', value: 'Ag' },
      { label: 'Cadmium (Cd)', value: 'Cd' },
      { label: 'Indium (In)', value: 'In' },
      { label: 'Tin (Sn)', value: 'Sn' },
      { label: 'Antimony (Sb)', value: 'Sb' },
      { label: 'Tellurium (Te)', value: 'Te' },
      { label: 'Iodine (I)', value: 'I' },
      { label: 'Xenon (Xe)', value: 'Xe' },
      { label: 'Cesium (Cs)', value: 'Cs' },
      { label: 'Barium (Ba)', value: 'Ba' },
      { label: 'Lanthanum (La)', value: 'La' },
      { label: 'Cerium (Ce)', value: 'Ce' },
      { label: 'Praseodymium (Pr)', value: 'Pr' },
      { label: 'Neodymium (Nd)', value: 'Nd' },
      { label: 'Promethium (Pm)', value: 'Pm' },
      { label: 'Samarium (Sm)', value: 'Sm' },
      { label: 'Europium (Eu)', value: 'Eu' },
      { label: 'Gadolinium (Gd)', value: 'Gd' },
      { label: 'Terbium (Tb)', value: 'Tb' },
      { label: 'Dysprosium (Dy)', value: 'Dy' },
      { label: 'Holmium (Ho)', value: 'Ho' },
      { label: 'Erbium (Er)', value: 'Er' },
      { label: 'Thulium (Tm)', value: 'Tm' },
      { label: 'Ytterbium (Yb)', value: 'Yb' },
      { label: 'Lutetium (Lu)', value: 'Lu' },
      { label: 'Hafnium (Hf)', value: 'Hf' },
      { label: 'Tantalum (Ta)', value: 'Ta' },
      { label: 'Tungsten (W)', value: 'W' },
      { label: 'Rhenium (Re)', value: 'Re' },
      { label: 'Osmium (Os)', value: 'Os' },
      { label: 'Iridium (Ir)', value: 'Ir' },
      { label: 'Platinum (Pt)', value: 'Pt' },
      { label: 'Gold (Au)', value: 'Au' },
      { label: 'Mercury (Hg)', value: 'Hg' },
      { label: 'Thallium (Tl)', value: 'Tl' },
      { label: 'Lead (Pb)', value: 'Pb' },
      { label: 'Bismuth (Bi)', value: 'Bi' },
      { label: 'Polonium (Po)', value: 'Po' },
      { label: 'Astatine (At)', value: 'At' },
      { label: 'Radon (Rn)', value: 'Rn' },
      { label: 'Francium (Fr)', value: 'Fr' },
      { label: 'Radium (Ra)', value: 'Ra' },
      { label: 'Actinium (Ac)', value: 'Ac' },
      { label: 'Thorium (Th)', value: 'Th' },
      { label: 'Protactinium (Pa)', value: 'Pa' },
      { label: 'Uranium (U)', value: 'U' },
      { label: 'Neptunium (Np)', value: 'Np' },
      { label: 'Plutonium (Pu)', value: 'Pu' },
      { label: 'Americium (Am)', value: 'Am' },
      { label: 'Curium (Cm)', value: 'Cm' },
      { label: 'Berkelium (Bk)', value: 'Bk' },
      { label: 'Californium (Cf)', value: 'Cf' },
      { label: 'Einsteinium (Es)', value: 'Es' },
      { label: 'Fermium (Fm)', value: 'Fm' },
      { label: 'Mendelevium (Md)', value: 'Md' },
      { label: 'Nobelium (No)', value: 'No' },
      { label: 'Lawrencium (Lr)', value: 'Lr' },
      { label: 'Rutherfordium (Rf)', value: 'Rf' },
      { label: 'Dubnium (Db)', value: 'Db' },
      { label: 'Seaborgium (Sg)', value: 'Sg' },
      { label: 'Bohrium (Bh)', value: 'Bh' },
      { label: 'Hassium (Hs)', value: 'Hs' },
      { label: 'Meitnerium (Mt)', value: 'Mt' },
      { label: 'Darmstadtium (Ds)', value: 'Ds' },
      { label: 'Roentgenium (Rg)', value: 'Rg' },
      { label: 'Copernicium (Cn)', value: 'Cn' },
      { label: 'Nihonium (Nh)', value: 'Nh' },
      { label: 'Flerovium (Fl)', value: 'Fl' },
      { label: 'Moscovium (Mc)', value: 'Mc' },
      { label: 'Livermorium (Lv)', value: 'Lv' },
      { label: 'Tennessine (Ts)', value: 'Ts' },
      { label: 'Oganesson (Og)', value: 'Og' }
    ];

    // Explicitly typing elementMasses as a record of string keys to number values
    elementMasses: { [key: string]: number } = {
      'H': 1.008,       // Atomic mass of Hydrogen
      'He': 4.0026,     // Atomic mass of Helium
      'Li': 6.94,       // Atomic mass of Lithium
      'Be': 9.0122,     // Atomic mass of Beryllium
      'B': 10.81,       // Atomic mass of Boron
      'C': 12.011,      // Atomic mass of Carbon
      'N': 14.007,      // Atomic mass of Nitrogen
      'O': 15.999,      // Atomic mass of Oxygen
      'F': 18.998,      // Atomic mass of Fluorine
      'Ne': 20.180,     // Atomic mass of Neon
      'Na': 22.990,     // Atomic mass of Sodium
      'Mg': 24.305,     // Atomic mass of Magnesium
      'Al': 26.982,     // Atomic mass of Aluminum
      'Si': 28.085,     // Atomic mass of Silicon
      'P': 30.974,      // Atomic mass of Phosphorus
      'S': 32.06,       // Atomic mass of Sulfur
      'Cl': 35.45,      // Atomic mass of Chlorine
      'Ar': 39.948,     // Atomic mass of Argon
      'K': 39.098,      // Atomic mass of Potassium
      'Ca': 40.078,     // Atomic mass of Calcium
      'Sc': 44.955,     // Atomic mass of Scandium
      'Ti': 47.867,     // Atomic mass of Titanium
      'V': 50.942,      // Atomic mass of Vanadium
      'Cr': 51.996,     // Atomic mass of Chromium
      'Mn': 54.938,     // Atomic mass of Manganese
      'Fe': 55.845,     // Atomic mass of Iron
      'Co': 58.933,     // Atomic mass of Cobalt
      'Ni': 58.693,     // Atomic mass of Nickel
      'Cu': 63.546,     // Atomic mass of Copper
      'Zn': 65.38,      // Atomic mass of Zinc
      'Ga': 69.723,     // Atomic mass of Gallium
      'Ge': 72.63,      // Atomic mass of Germanium
      'As': 74.922,     // Atomic mass of Arsenic
      'Se': 78.96,      // Atomic mass of Selenium
      'Br': 79.904,     // Atomic mass of Bromine
      'Kr': 83.798,     // Atomic mass of Krypton
      'Rb': 85.468,     // Atomic mass of Rubidium
      'Sr': 87.62,      // Atomic mass of Strontium
      'Y': 88.906,      // Atomic mass of Yttrium
      'Zr': 91.224,     // Atomic mass of Zirconium
      'Nb': 92.906,     // Atomic mass of Niobium
      'Mo': 95.95,      // Atomic mass of Molybdenum
      'Tc': 98,         // Atomic mass of Technetium (approximate)
      'Ru': 101.07,     // Atomic mass of Ruthenium
      'Rh': 102.91,     // Atomic mass of Rhodium
      'Pd': 106.42,     // Atomic mass of Palladium
      'Ag': 107.87,     // Atomic mass of Silver
      'Cd': 112.41,     // Atomic mass of Cadmium
      'In': 114.82,     // Atomic mass of Indium
      'Sn': 118.71,     // Atomic mass of Tin
      'Sb': 121.76,     // Atomic mass of Antimony
      'Te': 127.60,     // Atomic mass of Tellurium
      'I': 126.90,      // Atomic mass of Iodine
      'Xe': 131.29,     // Atomic mass of Xenon
      'Cs': 132.91,     // Atomic mass of Cesium
      'Ba': 137.33,     // Atomic mass of Barium
      'La': 138.91,     // Atomic mass of Lanthanum
      'Ce': 140.12,     // Atomic mass of Cerium
      'Pr': 140.91,     // Atomic mass of Praseodymium
      'Nd': 144.24,     // Atomic mass of Neodymium
      'Pm': 145,        // Atomic mass of Promethium (approximate)
      'Sm': 150.36,     // Atomic mass of Samarium
      'Eu': 151.96,     // Atomic mass of Europium
      'Gd': 157.25,     // Atomic mass of Gadolinium
      'Tb': 158.93,     // Atomic mass of Terbium
      'Dy': 162.50,     // Atomic mass of Dysprosium
      'Ho': 164.93,     // Atomic mass of Holmium
      'Er': 167.26,     // Atomic mass of Erbium
      'Tm': 168.93,     // Atomic mass of Thulium
      'Yb': 173.04,     // Atomic mass of Ytterbium
      'Lu': 174.97,     // Atomic mass of Lutetium
      'Hf': 178.49,     // Atomic mass of Hafnium
      'Ta': 180.95,     // Atomic mass of Tantalum
      'W': 183.84,      // Atomic mass of Tungsten
      'Re': 186.21,     // Atomic mass of Rhenium
      'Os': 190.23,     // Atomic mass of Osmium
      'Ir': 192.22,     // Atomic mass of Iridium
      'Pt': 195.08,     // Atomic mass of Platinum
      'Au': 196.97,     // Atomic mass of Gold
      'Hg': 200.59,     // Atomic mass of Mercury
      'Tl': 204.38,     // Atomic mass of Thallium
      'Pb': 207.2,      // Atomic mass of Lead
      'Bi': 208.98,     // Atomic mass of Bismuth
      'Po': 209,        // Atomic mass of Polonium (approximate)
      'At': 210,        // Atomic mass of Astatine (approximate)
      'Rn': 222,        // Atomic mass of Radon (approximate)
      'Fr': 223,        // Atomic mass of Francium (approximate)
      'Ra': 226,        // Atomic mass of Radium (approximate)
      'Ac': 227,        // Atomic mass of Actinium (approximate)
      'Th': 232.04,     // Atomic mass of Thorium
      'Pa': 231.04,     // Atomic mass of Protactinium
      'U': 238.03,      // Atomic mass of Uranium
      'Np': 237,        // Atomic mass of Neptunium (approximate)
      'Pu': 244,        // Atomic mass of Plutonium (approximate)
      'Am': 243,        // Atomic mass of Americium (approximate)
      'Cm': 247,        // Atomic mass of Curium (approximate)
      'Bk': 247,        // Atomic mass of Berkelium (approximate)
      'Cf': 251,        // Atomic mass of Californium (approximate)
      'Es': 252,        // Atomic mass of Einsteinium (approximate)
      'Fm': 257,        // Atomic mass of Fermium (approximate)
      'Md': 258,        // Atomic mass of Mendelevium (approximate)
      'No': 259,        // Atomic mass of Nobelium (approximate)
      'Lr': 262,        // Atomic mass of Lawrencium (approximate)
      'Rf': 267,        // Atomic mass of Rutherfordium (approximate)
      'Db': 270,        // Atomic mass of Dubnium (approximate)
      'Sg': 271,        // Atomic mass of Seaborgium (approximate)
      'Bh': 270,        // Atomic mass of Bohrium (approximate)
      'Hs': 277,        // Atomic mass of Hassium (approximate)
      'Mt': 278,        // Atomic mass of Meitnerium (approximate)
      'Ds': 281,        // Atomic mass of Darmstadtium (approximate)
      'Rg': 282,        // Atomic mass of Roentgenium (approximate)
      'Cn': 285,        // Atomic mass of Copernicium (approximate)
      'Nh': 286,        // Atomic mass of Nihonium (approximate)
      'Fl': 289,        // Atomic mass of Flerovium (approximate)
      'Mc': 290,        // Atomic mass of Moscovium (approximate)
      'Lv': 293,        // Atomic mass of Livermorium (approximate)
      'Ts': 294,        // Atomic mass of Tennessine (approximate)
      'Og': 294,        // Atomic mass of Oganesson (approximate)
  };


  // Variables for selected dropdown values, default to Hydrogen
  selectedFirstElement: string = 'H';
  selectedSecondElement: string = 'H';
  selectedThirdElement: string = 'H';
  selectedFourthElement: string = 'H';
  selectedFifthElement: string = 'H';

  // Variables for input values, default to Hydrogen atomic mass
  firstElementInput: number = NaN;
  secondElementInput: number = NaN;
  thirdElementInput: number = NaN;
  fourthElementInput: number = NaN;
  fifthElementInput: number = NaN;

  // Selected segment for display
  selectedSegment: string = 'composition';


  molecularWeight: number = 0;
  // The array to store element data
   // Declare the type for elements using the interface
   elements: ElementData[] = [];

   updateElementPercentages() {
    // Calculate the percentage for each element and store them in the array
    this.elements = [
      { symbol: this.selectedFirstElement, mass: this.firstElementInput, percentage: Math.ceil((this.firstElementInput / this.molecularWeight) * 100) },
      { symbol: this.selectedSecondElement, mass: this.secondElementInput, percentage: Math.ceil((this.secondElementInput / this.molecularWeight) * 100) },
      { symbol: this.selectedThirdElement, mass: this.thirdElementInput, percentage: Math.ceil((this.thirdElementInput / this.molecularWeight) * 100) },
      { symbol: this.selectedFourthElement, mass: this.fourthElementInput, percentage: Math.ceil((this.fourthElementInput / this.molecularWeight) * 100) },
      { symbol: this.selectedFifthElement, mass: this.fifthElementInput, percentage: Math.ceil((this.fifthElementInput / this.molecularWeight) * 100) },
    ];
  }
  // Function to calculate the molecular weight
  calculateMolecularWeight() {
    let totalWeight = 0;

    // Add the weight for each element
    if (this.selectedFirstElement && this.firstElementInput) {
      totalWeight += this.elementMasses[this.selectedFirstElement] * this.firstElementInput;
    }
    if (this.selectedSecondElement && this.secondElementInput) {
      totalWeight += this.elementMasses[this.selectedSecondElement] * this.secondElementInput;
    }
    if (this.selectedThirdElement && this.thirdElementInput) {
      totalWeight += this.elementMasses[this.selectedThirdElement] * this.thirdElementInput;
    }
    if (this.selectedFourthElement && this.fourthElementInput) {
      totalWeight += this.elementMasses[this.selectedFourthElement] * this.fourthElementInput;
    }
    if (this.selectedFifthElement && this.fifthElementInput) {
      totalWeight += this.elementMasses[this.selectedFifthElement] * this.fifthElementInput;
    }

    // Set the calculated molecular weight
    this.molecularWeight = totalWeight;
  }

  constructor() { }

  ngOnInit() { }

  // Function to adjust the input based on the selected element
  adjustInputValue(element: string, inputValue: number): number {
    const mass = this.elementMasses[element] ?? 1; // Use '??' for defaulting to 1
    return inputValue * mass; // Adjust the input based on the element's mass
  }

  // Functions to handle changes in dropdowns and inputs
  onFirstElementChange() {
    console.log('First Element selected:', this.selectedFirstElement);
    this.firstElementInput = this.adjustInputValue(this.selectedFirstElement, 1);
  }

  onSecondElementChange() {
    console.log('Second Element selected:', this.selectedSecondElement);
    this.secondElementInput = this.adjustInputValue(this.selectedSecondElement, 1);
  }

  onThirdElementChange() {
    console.log('Third Element selected:', this.selectedThirdElement);
    this.thirdElementInput = this.adjustInputValue(this.selectedThirdElement, 1);
  }

  onFourthElementChange() {
    console.log('Fourth Element selected:', this.selectedFourthElement);
    this.fourthElementInput = this.adjustInputValue(this.selectedFourthElement, 1);
  }

  onFifthElementChange() {
    console.log('Fifth Element selected:', this.selectedFifthElement);
    this.fifthElementInput = this.adjustInputValue(this.selectedFifthElement, 1);
  }

  // Functions to handle changes in the input values
  onFirstElementInputChange() {
    console.log('First Element input changed:', this.firstElementInput);
    this.calculateMolecularWeight();
    this.updateElementPercentages();
  }

  onSecondElementInputChange() {
    console.log('Second Element input changed:', this.secondElementInput);
    this.calculateMolecularWeight();
    this.updateElementPercentages();
  }

  onThirdElementInputChange() {
    console.log('Third Element input changed:', this.thirdElementInput);
    this.calculateMolecularWeight();
    this.updateElementPercentages();
  }

  onFourthElementInputChange() {
    console.log('Fourth Element input changed:', this.fourthElementInput);
    this.calculateMolecularWeight();
    this.updateElementPercentages();
  }

  onFifthElementInputChange() {
    console.log('Fifth Element input changed:', this.fifthElementInput);
    this.calculateMolecularWeight();
    this.updateElementPercentages();
  }
  
  clearInputs() {
    // Reset element selections
    this.selectedFirstElement = '';
    this.selectedSecondElement = '';
    this.selectedThirdElement = '';
    this.selectedFourthElement = '';
    this.selectedFifthElement = '';
  
    // Reset input values
    this.firstElementInput = NaN;
    this.secondElementInput = NaN;
    this.thirdElementInput = NaN;
    this.fourthElementInput = NaN;
    this.fifthElementInput = NaN;
  
    // Reset molecular weight
    this.molecularWeight = 0;
  
    // Optionally, reset the elements array if you are using it for displaying the chart
    this.elements = [];
  
    // Reset the segment to 'composition'
    this.selectedSegment = 'composition';
  }
}
