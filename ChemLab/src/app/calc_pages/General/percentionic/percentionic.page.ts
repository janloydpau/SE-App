import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentionic',
  templateUrl: './percentionic.page.html',
  styleUrls: ['./percentionic.page.scss'],
})
export class PercentionicPage implements OnInit {

  ngOnInit() {
  }

  firstAtom: string = '';  // Stores the symbol of the first selected atom
  secondAtom: string = ''; // Stores the symbol of the second selected atom
  electronegativityDifference: number = 0;  // Difference in electronegativity between two atoms
  percentIonicCharacter: number = 0;  // Percent ionic character calculated

  // Elements data (sorted alphabetically by symbol)
  elements = [
    { symbol: 'Ac', name: 'Actinium', electronegativity: 1.1 },
    { symbol: 'Al', name: 'Aluminum', electronegativity: 1.61 },
    { symbol: 'Am', name: 'Americium', electronegativity: 1.13 },
    { symbol: 'Ar', name: 'Argon', electronegativity: 0 },
    { symbol: 'As', name: 'Arsenic', electronegativity: 2.18 },
    { symbol: 'At', name: 'Astatine', electronegativity: 2.2 },
    { symbol: 'Au', name: 'Gold', electronegativity: 2.54 },
    { symbol: 'B', name: 'Boron', electronegativity: 2.04 },
    { symbol: 'Ba', name: 'Barium', electronegativity: 0.89 },
    { symbol: 'Be', name: 'Beryllium', electronegativity: 1.57 },
    { symbol: 'Bi', name: 'Bismuth', electronegativity: 2.02 },
    { symbol: 'Bk', name: 'Berkelium', electronegativity: 1.3 },
    { symbol: 'Br', name: 'Bromine', electronegativity: 2.96 },
    { symbol: 'C', name: 'Carbon', electronegativity: 2.55 },
    { symbol: 'Ca', name: 'Calcium', electronegativity: 1.00 },
    { symbol: 'Cd', name: 'Cadmium', electronegativity: 1.69 },
    { symbol: 'Ce', name: 'Cerium', electronegativity: 1.12 },
    { symbol: 'Cl', name: 'Chlorine', electronegativity: 3.16 },
    { symbol: 'Cm', name: 'Curium', electronegativity: 1.3 },
    { symbol: 'Cn', name: 'Copernicium', electronegativity: 1.9 },
    { symbol: 'Co', name: 'Cobalt', electronegativity: 1.88 },
    { symbol: 'Cr', name: 'Chromium', electronegativity: 1.66 },
    { symbol: 'Cs', name: 'Cesium', electronegativity: 0.79 },
    { symbol: 'Cu', name: 'Copper', electronegativity: 1.90 },
    { symbol: 'Db', name: 'Dubnium', electronegativity: 1.6 },
    { symbol: 'Dy', name: 'Dysprosium', electronegativity: 1.22 },
    { symbol: 'Er', name: 'Erbium', electronegativity: 1.24 },
    { symbol: 'Es', name: 'Einsteinium', electronegativity: 1.3 },
    { symbol: 'Eu', name: 'Europium', electronegativity: 1.2 },
    { symbol: 'F', name: 'Fluorine', electronegativity: 3.98 },
    { symbol: 'Fe', name: 'Iron', electronegativity: 1.83 },
    { symbol: 'Fr', name: 'Francium', electronegativity: 0.7 },
    { symbol: 'Ga', name: 'Gallium', electronegativity: 1.81 },
    { symbol: 'Gd', name: 'Gadolinium', electronegativity: 1.2 },
    { symbol: 'Ge', name: 'Germanium', electronegativity: 2.01 },
    { symbol: 'Au', name: 'Gold', electronegativity: 2.54 },
    { symbol: 'H', name: 'Hydrogen', electronegativity: 2.20 },
    { symbol: 'He', name: 'Helium', electronegativity: 0 },
    { symbol: 'Ho', name: 'Holmium', electronegativity: 1.23 },
    { symbol: 'Hf', name: 'Hafnium', electronegativity: 1.3 },
    { symbol: 'I', name: 'Iodine', electronegativity: 2.66 },
    { symbol: 'In', name: 'Indium', electronegativity: 1.78 },
    { symbol: 'Ir', name: 'Iridium', electronegativity: 2.20 },
    { symbol: 'K', name: 'Potassium', electronegativity: 0.82 },
    { symbol: 'Kr', name: 'Krypton', electronegativity: 3.00 },
    { symbol: 'La', name: 'Lanthanum', electronegativity: 1.1 },
    { symbol: 'Li', name: 'Lithium', electronegativity: 0.98 },
    { symbol: 'Lr', name: 'Lawrencium', electronegativity: 1.3 },
    { symbol: 'Lu', name: 'Lutetium', electronegativity: 1.27 },
    { symbol: 'Mn', name: 'Manganese', electronegativity: 1.55 },
    { symbol: 'Mo', name: 'Molybdenum', electronegativity: 2.16 },
    { symbol: 'Mt', name: 'Meitnerium', electronegativity: 1.5 },
    { symbol: 'N', name: 'Nitrogen', electronegativity: 3.04 },
    { symbol: 'Na', name: 'Sodium', electronegativity: 0.93 },
    { symbol: 'Nb', name: 'Niobium', electronegativity: 1.6 },
    { symbol: 'Nd', name: 'Neodymium', electronegativity: 1.14 },
    { symbol: 'Ne', name: 'Neon', electronegativity: 0 },
    { symbol: 'Ni', name: 'Nickel', electronegativity: 1.91 },
    { symbol: 'Np', name: 'Neptunium', electronegativity: 1.36 },
    { symbol: 'O', name: 'Oxygen', electronegativity: 3.44 },
    { symbol: 'Os', name: 'Osmium', electronegativity: 2.2 },
    { symbol: 'P', name: 'Phosphorus', electronegativity: 2.19 },
    { symbol: 'Pa', name: 'Protactinium', electronegativity: 1.5 },
    { symbol: 'Pt', name: 'Platinum', electronegativity: 2.28 },
    { symbol: 'Pu', name: 'Plutonium', electronegativity: 1.38 },
    { symbol: 'Ra', name: 'Radium', electronegativity: 0.9 },
    { symbol: 'Rb', name: 'Rubidium', electronegativity: 0.82 },
    { symbol: 'Re', name: 'Rhenium', electronegativity: 1.9 },
    { symbol: 'Rf', name: 'Rutherfordium', electronegativity: 1.6 },
    { symbol: 'Rg', name: 'Roentgenium', electronegativity: 1.9 },
    { symbol: 'Rh', name: 'Rhodium', electronegativity: 2.28 },
    { symbol: 'Rn', name: 'Radon', electronegativity: 0 },
    { symbol: 'Ru', name: 'Ruthenium', electronegativity: 2.2 },
    { symbol: 'S', name: 'Sulfur', electronegativity: 2.58 },
    { symbol: 'Sb', name: 'Antimony', electronegativity: 2.05 },
    { symbol: 'Sc', name: 'Scandium', electronegativity: 1.36 },
    { symbol: 'Se', name: 'Selenium', electronegativity: 2.55 },
    { symbol: 'Si', name: 'Silicon', electronegativity: 1.90 },
    { symbol: 'Sm', name: 'Samarium', electronegativity: 1.17 },
    { symbol: 'Sn', name: 'Tin', electronegativity: 1.96 },
    { symbol: 'Sr', name: 'Strontium', electronegativity: 0.95 },
    { symbol: 'Ta', name: 'Tantalum', electronegativity: 1.5 },
    { symbol: 'Tb', name: 'Terbium', electronegativity: 1.1 },
    { symbol: 'Tc', name: 'Technetium', electronegativity: 1.9 },
    { symbol: 'Te', name: 'Tellurium', electronegativity: 2.01 },
    { symbol: 'Th', name: 'Thorium', electronegativity: 1.3 },
    { symbol: 'Ti', name: 'Titanium', electronegativity: 1.54 },
    { symbol: 'Tl', name: 'Thallium', electronegativity: 1.62 },
    { symbol: 'Tm', name: 'Thulium', electronegativity: 1.25 },
    { symbol: 'U', name: 'Uranium', electronegativity: 1.38 },
    { symbol: 'V', name: 'Vanadium', electronegativity: 1.63 },
    { symbol: 'W', name: 'Tungsten', electronegativity: 2.36 },
    { symbol: 'Xe', name: 'Xenon', electronegativity: 2.6 },
    { symbol: 'Y', name: 'Yttrium', electronegativity: 1.22 },
    { symbol: 'Yb', name: 'Ytterbium', electronegativity: 1.1 },
    { symbol: 'Zn', name: 'Zinc', electronegativity: 1.65 },
    { symbol: 'Zr', name: 'Zirconium', electronegativity: 1.33 }
  ];

   // Method to get the electronegativity value for a selected atom
   getElectronegativity(symbol: string): number {
    const atom = this.elements.find(el => el.symbol === symbol);
    return atom ? atom.electronegativity : 0;
  }

    // Method to calculate the percent ionic character
  calculateIonicCharacter() {
    if (this.firstAtom && this.secondAtom) {
      const atom1 = this.elements.find(el => this.firstAtom.includes(el.symbol));
      const atom2 = this.elements.find(el => this.secondAtom.includes(el.symbol));
      
      if (atom1 && atom2) {
        const electronegativityDifference = Math.abs(atom1.electronegativity - atom2.electronegativity);
        this.electronegativityDifference = parseFloat(electronegativityDifference.toFixed(2));

        // Check if electronegativity difference is 0
        if (this.electronegativityDifference === 0) {
          this.electronegativityDifference = NaN; // Set it to NaN to trigger the "Error" state
          this.percentIonicCharacter = NaN; // Set percent ionic character to NaN
        } else {
          // Formula for percent ionic character
          this.percentIonicCharacter = parseFloat(
            (100 * (1 - Math.exp(-Math.pow(this.electronegativityDifference / 2, 2)))).toFixed(2)
          );
        }
      }
    }
  }

    // Method to check if a value is NaN
  isNaNValue(value: number): boolean {
    return isNaN(value);
  }
}