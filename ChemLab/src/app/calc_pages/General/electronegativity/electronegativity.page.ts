import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronegativity',
  templateUrl: './electronegativity.page.html',
  styleUrls: ['./electronegativity.page.scss'],
})
export class ElectronegativityPage implements OnInit {

  elements = [
    { name: 'Actinium', symbol: 'Ac', electronegativity: 1.1 },
    { name: 'Aluminum', symbol: 'Al', electronegativity: 1.61 },
    { name: 'Americium', symbol: 'Am', electronegativity: 1.3 },
    { name: 'Antimony', symbol: 'Sb', electronegativity: 2.05 },
    { name: 'Argon', symbol: 'Ar', electronegativity: null },
    { name: 'Arsenic', symbol: 'As', electronegativity: 2.18 },
    { name: 'Astatine', symbol: 'At', electronegativity: 2.2 },
    { name: 'Barium', symbol: 'Ba', electronegativity: 0.89 },
    { name: 'Berkelium', symbol: 'Bk', electronegativity: 1.3 },
    { name: 'Beryllium', symbol: 'Be', electronegativity: 1.57 },
    { name: 'Bismuth', symbol: 'Bi', electronegativity: 2.02 },
    { name: 'Bohrium', symbol: 'Bh', electronegativity: null },
    { name: 'Boron', symbol: 'B', electronegativity: 2.04 },
    { name: 'Bromine', symbol: 'Br', electronegativity: 2.96 },
    { name: 'Cadmium', symbol: 'Cd', electronegativity: 1.69 },
    { name: 'Calcium', symbol: 'Ca', electronegativity: 1.0 },
    { name: 'Carbon', symbol: 'C', electronegativity: 2.55 },
    { name: 'Cerium', symbol: 'Ce', electronegativity: 1.12 },
    { name: 'Cesium', symbol: 'Cs', electronegativity: 0.79 },
    { name: 'Chlorine', symbol: 'Cl', electronegativity: 3.16 },
    { name: 'Chromium', symbol: 'Cr', electronegativity: 1.66 },
    { name: 'Cobalt', symbol: 'Co', electronegativity: 1.88 },
    { name: 'Copper', symbol: 'Cu', electronegativity: 1.9 },
    { name: 'Curium', symbol: 'Cm', electronegativity: 1.3 },
    { name: 'Darmstadtium', symbol: 'Ds', electronegativity: null },
    { name: 'Dubnium', symbol: 'Db', electronegativity: null },
    { name: 'Dysprosium', symbol: 'Dy', electronegativity: 1.22 },
    { name: 'Einsteinium', symbol: 'Es', electronegativity: 1.3 },
    { name: 'Erbium', symbol: 'Er', electronegativity: 1.24 },
    { name: 'Europium', symbol: 'Eu', electronegativity: 1.2 },
    { name: 'Fermium', symbol: 'Fm', electronegativity: null },
    { name: 'Fluorine', symbol: 'F', electronegativity: 3.98 },
    { name: 'Francium', symbol: 'Fr', electronegativity: 0.7 },
    { name: 'Gadolinium', symbol: 'Gd', electronegativity: 1.2 },
    { name: 'Gallium', symbol: 'Ga', electronegativity: 1.81 },
    { name: 'Germanium', symbol: 'Ge', electronegativity: 2.01 },
    { name: 'Gold', symbol: 'Au', electronegativity: 2.54 },
    { name: 'Hafnium', symbol: 'Hf', electronegativity: 1.3 },
    { name: 'Helium', symbol: 'He', electronegativity: null },
    { name: 'Holmium', symbol: 'Ho', electronegativity: 1.23 },
    { name: 'Hydrogen', symbol: 'H', electronegativity: 2.2 },
    { name: 'Indium', symbol: 'In', electronegativity: 1.78 },
    { name: 'Iodine', symbol: 'I', electronegativity: 2.66 },
    { name: 'Iridium', symbol: 'Ir', electronegativity: 2.2 },
    { name: 'Iron', symbol: 'Fe', electronegativity: 1.83 },
    { name: 'Krypton', symbol: 'Kr', electronegativity: 3.0 },
    { name: 'Lanthanum', symbol: 'La', electronegativity: 1.1 },
    { name: 'Lead', symbol: 'Pb', electronegativity: 2.33 },
    { name: 'Lithium', symbol: 'Li', electronegativity: 0.98 },
    { name: 'Lutetium', symbol: 'Lu', electronegativity: 1.27 },
    { name: 'Magnesium', symbol: 'Mg', electronegativity: 1.31 },
    { name: 'Manganese', symbol: 'Mn', electronegativity: 1.55 },
    { name: 'Meitnerium', symbol: 'Mt', electronegativity: null },
    { name: 'Mendelevium', symbol: 'Md', electronegativity: 1.3 },
    { name: 'Mercury', symbol: 'Hg', electronegativity: 2.0 },
    { name: 'Molybdenum', symbol: 'Mo', electronegativity: 2.16 },
    { name: 'Neodymium', symbol: 'Nd', electronegativity: 1.14 },
    { name: 'Neon', symbol: 'Ne', electronegativity: null },
    { name: 'Nickel', symbol: 'Ni', electronegativity: 1.91 },
    { name: 'Niobium', symbol: 'Nb', electronegativity: 1.6 },
    { name: 'Nitrogen', symbol: 'N', electronegativity: 3.04 },
    { name: 'Nobelium', symbol: 'No', electronegativity: 1.3 },
    { name: 'Oganesson', symbol: 'Og', electronegativity: null },
    { name: 'Osmium', symbol: 'Os', electronegativity: 2.2 },
    { name: 'Oxygen', symbol: 'O', electronegativity: 3.44 },
    { name: 'Palladium', symbol: 'Pd', electronegativity: 2.2 },
    { name: 'Phosphorus', symbol: 'P', electronegativity: 2.19 },
    { name: 'Platinum', symbol: 'Pt', electronegativity: 2.28 },
    { name: 'Plutonium', symbol: 'Pu', electronegativity: 1.28 },
    { name: 'Polonium', symbol: 'Po', electronegativity: 2.0 },
    { name: 'Potassium', symbol: 'K', electronegativity: 0.82 },
    { name: 'Praseodymium', symbol: 'Pr', electronegativity: 1.13 },
    { name: 'Promethium', symbol: 'Pm', electronegativity: 1.13 },
    { name: 'Protactinium', symbol: 'Pa', electronegativity: 1.5 },
    { name: 'Radium', symbol: 'Ra', electronegativity: 0.9 },
    { name: 'Radon', symbol: 'Rn', electronegativity: null },
    { name: 'Rhenium', symbol: 'Re', electronegativity: 1.9 },
    { name: 'Rhodium', symbol: 'Rh', electronegativity: 2.28 },
    { name: 'Rubidium', symbol: 'Rb', electronegativity: 0.82 },
    { name: 'Ruthenium', symbol: 'Ru', electronegativity: 2.2 },
    { name: 'Rutherfordium', symbol: 'Rf', electronegativity: null },
    { name: 'Samarium', symbol: 'Sm', electronegativity: 1.17 },
    { name: 'Scandium', symbol: 'Sc', electronegativity: 1.36 },
    { name: 'Seaborgium', symbol: 'Sg', electronegativity: null },
    { name: 'Selenium', symbol: 'Se', electronegativity: 2.55 },
    { name: 'Silicon', symbol: 'Si', electronegativity: 1.9 },
    { name: 'Silver', symbol: 'Ag', electronegativity: 1.93 },
    { name: 'Sodium', symbol: 'Na', electronegativity: 0.93 },
    { name: 'Strontium', symbol: 'Sr', electronegativity: 0.95 },
    { name: 'Sulfur', symbol: 'S', electronegativity: 2.58 },
    { name: 'Tantalum', symbol: 'Ta', electronegativity: 1.5 },
    { name: 'Technetium', symbol: 'Tc', electronegativity: 1.9 },
    { name: 'Tellurium', symbol: 'Te', electronegativity: 2.1 },
    { name: 'Terbium', symbol: 'Tb', electronegativity: 1.1 },
    { name: 'Thallium', symbol: 'Tl', electronegativity: 1.62 },
    { name: 'Thorium', symbol: 'Th', electronegativity: 1.3 },
    { name: 'Thulium', symbol: 'Tm', electronegativity: 1.25 },
    { name: 'Tin', symbol: 'Sn', electronegativity: 1.96 },
    { name: 'Titanium', symbol: 'Ti', electronegativity: 1.54 },
    { name: 'Tungsten', symbol: 'W', electronegativity: 2.36 },
    { name: 'Uranium', symbol: 'U', electronegativity: 1.38 },
    { name: 'Vanadium', symbol: 'V', electronegativity: 1.63 },
    { name: 'Xenon', symbol: 'Xe', electronegativity: 2.6 },
    { name: 'Ytterbium', symbol: 'Yb', electronegativity: null },
    { name: 'Yttrium', symbol: 'Y', electronegativity: 1.22 },
    { name: 'Zinc', symbol: 'Zn', electronegativity: 1.65 },
    { name: 'Zirconium', symbol: 'Zr', electronegativity: 1.33 },
  ];
  

  selectedFirstElement: any;
  selectedSecondElement: any;

  constructor() {}

  ngOnInit() {}

  calculateDifference(): number | null {
    if (this.selectedFirstElement && this.selectedSecondElement) {
      const diff =
        Math.abs(
          (this.selectedFirstElement.electronegativity || 0) -
            (this.selectedSecondElement.electronegativity || 0)
        );
      return diff || 0;
    }
    return null;
  }

  determineBond(): string | null {
    const diff = this.calculateDifference();
    if (diff !== null) {
      if (diff > 1.7) {
        return 'Ionic';
      } else if (diff >= 0.4) {
        return 'Polar Covalent';
      } else {
        return 'Nonpolar Covalent';
      }
    }
    return null;
  }

  clearAll(): void {
    this.selectedFirstElement = null;
    this.selectedSecondElement = null;
  }
}
