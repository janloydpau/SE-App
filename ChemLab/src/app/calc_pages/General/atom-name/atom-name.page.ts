import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-atom-name',
  templateUrl: './atom-name.page.html',
  styleUrls: ['./atom-name.page.scss'],
})
export class AtomNamePage implements OnInit {
  atomicNumber: number = NaN;
  atomicMass: number = NaN;
  charge: number = NaN;
  protons: number = NaN;
  neutrons: number = NaN;
  electrons: number = NaN;

  elementName: string = '';
  azeNotation: string = '';
  totalMass: number = 0;
  showDetails: boolean = false; // Controls the visibility of the details card

  elements = [
    { name: 'Hydrogen', symbol: 'H', atomicNumber: 1, atomicMass: 1.008 },
    { name: 'Helium', symbol: 'He', atomicNumber: 2, atomicMass: 4.0026 },
    { name: 'Lithium', symbol: 'Li', atomicNumber: 3, atomicMass: 6.94 },
    { name: 'Beryllium', symbol: 'Be', atomicNumber: 4, atomicMass: 9.0122 },
    { name: 'Boron', symbol: 'B', atomicNumber: 5, atomicMass: 10.81 },
    { name: 'Carbon', symbol: 'C', atomicNumber: 6, atomicMass: 12.011 },
    { name: 'Nitrogen', symbol: 'N', atomicNumber: 7, atomicMass: 14.007 },
    { name: 'Oxygen', symbol: 'O', atomicNumber: 8, atomicMass: 15.999 },
    { name: 'Fluorine', symbol: 'F', atomicNumber: 9, atomicMass: 18.998 },
    { name: 'Neon', symbol: 'Ne', atomicNumber: 10, atomicMass: 20.180 },
    { name: 'Sodium', symbol: 'Na', atomicNumber: 11, atomicMass: 22.990 },
    { name: 'Magnesium', symbol: 'Mg', atomicNumber: 12, atomicMass: 24.305 },
    { name: 'Aluminum', symbol: 'Al', atomicNumber: 13, atomicMass: 26.982 },
    { name: 'Silicon', symbol: 'Si', atomicNumber: 14, atomicMass: 28.085 },
    { name: 'Phosphorus', symbol: 'P', atomicNumber: 15, atomicMass: 30.974 },
    { name: 'Sulfur', symbol: 'S', atomicNumber: 16, atomicMass: 32.06 },
    { name: 'Chlorine', symbol: 'Cl', atomicNumber: 17, atomicMass: 35.45 },
    { name: 'Argon', symbol: 'Ar', atomicNumber: 18, atomicMass: 39.948 },
    { name: 'Potassium', symbol: 'K', atomicNumber: 19, atomicMass: 39.098 },
    { name: 'Calcium', symbol: 'Ca', atomicNumber: 20, atomicMass: 40.078 },
    { name: 'Scandium', symbol: 'Sc', atomicNumber: 21, atomicMass: 44.956 },
    { name: 'Titanium', symbol: 'Ti', atomicNumber: 22, atomicMass: 47.867 },
    { name: 'Vanadium', symbol: 'V', atomicNumber: 23, atomicMass: 50.942 },
    { name: 'Chromium', symbol: 'Cr', atomicNumber: 24, atomicMass: 52.0 },
    { name: 'Manganese', symbol: 'Mn', atomicNumber: 25, atomicMass: 54.938 },
    { name: 'Iron', symbol: 'Fe', atomicNumber: 26, atomicMass: 55.845 },
    { name: 'Cobalt', symbol: 'Co', atomicNumber: 27, atomicMass: 58.933 },
    { name: 'Nickel', symbol: 'Ni', atomicNumber: 28, atomicMass: 58.693 },
    { name: 'Copper', symbol: 'Cu', atomicNumber: 29, atomicMass: 63.546 },
    { name: 'Zinc', symbol: 'Zn', atomicNumber: 30, atomicMass: 65.38 },
    { name: 'Gallium', symbol: 'Ga', atomicNumber: 31, atomicMass: 69.723 },
    { name: 'Germanium', symbol: 'Ge', atomicNumber: 32, atomicMass: 72.63 },
    { name: 'Arsenic', symbol: 'As', atomicNumber: 33, atomicMass: 74.922 },
    { name: 'Selenium', symbol: 'Se', atomicNumber: 34, atomicMass: 78.971 },
    { name: 'Bromine', symbol: 'Br', atomicNumber: 35, atomicMass: 79.904 },
    { name: 'Krypton', symbol: 'Kr', atomicNumber: 36, atomicMass: 83.798 },
    { name: 'Rubidium', symbol: 'Rb', atomicNumber: 37, atomicMass: 85.468 },
    { name: 'Strontium', symbol: 'Sr', atomicNumber: 38, atomicMass: 87.62 },
    { name: 'Yttrium', symbol: 'Y', atomicNumber: 39, atomicMass: 88.905 },
    { name: 'Zirconium', symbol: 'Zr', atomicNumber: 40, atomicMass: 91.224 },
    { name: 'Niobium', symbol: 'Nb', atomicNumber: 41, atomicMass: 92.906 },
    { name: 'Molybdenum', symbol: 'Mo', atomicNumber: 42, atomicMass: 95.95 },
    { name: 'Technetium', symbol: 'Tc', atomicNumber: 43, atomicMass: 98.0 },
    { name: 'Ruthenium', symbol: 'Ru', atomicNumber: 44, atomicMass: 101.07 },
    { name: 'Rhodium', symbol: 'Rh', atomicNumber: 45, atomicMass: 102.91 },
    { name: 'Palladium', symbol: 'Pd', atomicNumber: 46, atomicMass: 106.42 },
    { name: 'Silver', symbol: 'Ag', atomicNumber: 47, atomicMass: 107.868 },
    { name: 'Cadmium', symbol: 'Cd', atomicNumber: 48, atomicMass: 112.41 },
    { name: 'Indium', symbol: 'In', atomicNumber: 49, atomicMass: 114.82 },
    { name: 'Tin', symbol: 'Sn', atomicNumber: 50, atomicMass: 118.71 },
    { name: 'Antimony', symbol: 'Sb', atomicNumber: 51, atomicMass: 121.76 },
    { name: 'Tellurium', symbol: 'Te', atomicNumber: 52, atomicMass: 127.60 },
    { name: 'Iodine', symbol: 'I', atomicNumber: 53, atomicMass: 126.90 },
    { name: 'Xenon', symbol: 'Xe', atomicNumber: 54, atomicMass: 131.29 },
    { name: 'Cesium', symbol: 'Cs', atomicNumber: 55, atomicMass: 132.91 },
    { name: 'Barium', symbol: 'Ba', atomicNumber: 56, atomicMass: 137.33 },
    { name: 'Lanthanum', symbol: 'La', atomicNumber: 57, atomicMass: 138.91 },
    { name: 'Cerium', symbol: 'Ce', atomicNumber: 58, atomicMass: 140.12 },
    { name: 'Praseodymium', symbol: 'Pr', atomicNumber: 59, atomicMass: 140.91 },
    { name: 'Neodymium', symbol: 'Nd', atomicNumber: 60, atomicMass: 144.24 },
    { name: 'Promethium', symbol: 'Pm', atomicNumber: 61, atomicMass: 145.0 },
    { name: 'Samarium', symbol: 'Sm', atomicNumber: 62, atomicMass: 150.36 },
    { name: 'Europium', symbol: 'Eu', atomicNumber: 63, atomicMass: 152.00 },
    { name: 'Gadolinium', symbol: 'Gd', atomicNumber: 64, atomicMass: 157.25 },
    { name: 'Terbium', symbol: 'Tb', atomicNumber: 65, atomicMass: 158.93 },
    { name: 'Dysprosium', symbol: 'Dy', atomicNumber: 66, atomicMass: 162.50 },
    { name: 'Holmium', symbol: 'Ho', atomicNumber: 67, atomicMass: 164.93 },
    { name: 'Erbium', symbol: 'Er', atomicNumber: 68, atomicMass: 167.26 },
    { name: 'Thulium', symbol: 'Tm', atomicNumber: 69, atomicMass: 168.93 },
    { name: 'Ytterbium', symbol: 'Yb', atomicNumber: 70, atomicMass: 173.04 },
    { name: 'Lutetium', symbol: 'Lu', atomicNumber: 71, atomicMass: 175.0 },
    { name: 'Hafnium', symbol: 'Hf', atomicNumber: 72, atomicMass: 178.49 },
    { name: 'Tantalum', symbol: 'Ta', atomicNumber: 73, atomicMass: 180.95 },
    { name: 'Tungsten', symbol: 'W', atomicNumber: 74, atomicMass: 183.84 },
    { name: 'Rhenium', symbol: 'Re', atomicNumber: 75, atomicMass: 186.21 },
    { name: 'Osmium', symbol: 'Os', atomicNumber: 76, atomicMass: 190.23 },
    { name: 'Iridium', symbol: 'Ir', atomicNumber: 77, atomicMass: 192.22 },
    { name: 'Platinum', symbol: 'Pt', atomicNumber: 78, atomicMass: 195.08 },
    { name: 'Gold', symbol: 'Au', atomicNumber: 79, atomicMass: 196.97 },
    { name: 'Mercury', symbol: 'Hg', atomicNumber: 80, atomicMass: 200.59 },
    { name: 'Thallium', symbol: 'Tl', atomicNumber: 81, atomicMass: 204.38 },
    { name: 'Lead', symbol: 'Pb', atomicNumber: 82, atomicMass: 207.2 },
    { name: 'Bismuth', symbol: 'Bi', atomicNumber: 83, atomicMass: 208.98 },
    { name: 'Polonium', symbol: 'Po', atomicNumber: 84, atomicMass: 209.98 },
    { name: 'Astatine', symbol: 'At', atomicNumber: 85, atomicMass: 210.0 },
    { name: 'Radon', symbol: 'Rn', atomicNumber: 86, atomicMass: 222.0 },
    { name: 'Francium', symbol: 'Fr', atomicNumber: 87, atomicMass: 223.0 },
    { name: 'Radium', symbol: 'Ra', atomicNumber: 88, atomicMass: 226.0 },
    { name: 'Actinium', symbol: 'Ac', atomicNumber: 89, atomicMass: 227.0 },
    { name: 'Thorium', symbol: 'Th', atomicNumber: 90, atomicMass: 232.04 },
    { name: 'Protactinium', symbol: 'Pa', atomicNumber: 91, atomicMass: 231.04 },
    { name: 'Uranium', symbol: 'U', atomicNumber: 92, atomicMass: 238.03 },
    { name: 'Neptunium', symbol: 'Np', atomicNumber: 93, atomicMass: 237.0 },
    { name: 'Plutonium', symbol: 'Pu', atomicNumber: 94, atomicMass: 244.0 },
    { name: 'Americium', symbol: 'Am', atomicNumber: 95, atomicMass: 243.0 },
    { name: 'Curium', symbol: 'Cm', atomicNumber: 96, atomicMass: 247.0 },
    { name: 'Berkelium', symbol: 'Bk', atomicNumber: 97, atomicMass: 247.0 },
    { name: 'Californium', symbol: 'Cf', atomicNumber: 98, atomicMass: 251.0 },
    { name: 'Einsteinium', symbol: 'Es', atomicNumber: 99, atomicMass: 252.0 },
    { name: 'Fermium', symbol: 'Fm', atomicNumber: 100, atomicMass: 257.0 },
    { name: 'Mendelevium', symbol: 'Md', atomicNumber: 101, atomicMass: 258.0 },
    { name: 'Nobelium', symbol: 'No', atomicNumber: 102, atomicMass: 259.0 },
    { name: 'Lawrencium', symbol: 'Lr', atomicNumber: 103, atomicMass: 262.0 },
    { name: 'Rutherfordium', symbol: 'Rf', atomicNumber: 104, atomicMass: 267.0 },
    { name: 'Dubnium', symbol: 'Db', atomicNumber: 105, atomicMass: 270.0 },
    { name: 'Seaborgium', symbol: 'Sg', atomicNumber: 106, atomicMass: 271.0 },
    { name: 'Bohrium', symbol: 'Bh', atomicNumber: 107, atomicMass: 270.0 },
    { name: 'Hassium', symbol: 'Hs', atomicNumber: 108, atomicMass: 277.0 },
    { name: 'Meitnerium', symbol: 'Mt', atomicNumber: 109, atomicMass: 278.0 },
    { name: 'Darmstadtium', symbol: 'Ds', atomicNumber: 110, atomicMass: 281.0 },
    { name: 'Roentgenium', symbol: 'Rg', atomicNumber: 111, atomicMass: 280.0 },
    { name: 'Copernicium', symbol: 'Cn', atomicNumber: 112, atomicMass: 285.0 },
    { name: 'Nihonium', symbol: 'Nh', atomicNumber: 113, atomicMass: 284.0 },
    { name: 'Flerovium', symbol: 'Fl', atomicNumber: 114, atomicMass: 289.0 },
    { name: 'Moscovium', symbol: 'Mc', atomicNumber: 115, atomicMass: 288.0 },
    { name: 'Livermorium', symbol: 'Lv', atomicNumber: 116, atomicMass: 293.0 },
    { name: 'Tennessine', symbol: 'Ts', atomicNumber: 117, atomicMass: 294.0 },
    { name: 'Oganesson', symbol: 'Og', atomicNumber: 118, atomicMass: 294.0 }
  ];

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    this.calculateComposition();
  }

  // Validate and restrict atomic number within range
  validateAtomicNumber() {
    if (this.atomicNumber > 118) {
      this.atomicNumber = 118;
      this.showToast('Atomic number must be between 1 and 118');
    } else if (this.atomicNumber < 1) {
      this.atomicNumber = 1;
      this.showToast('Atomic number must be between 1 and 118');
    }
    this.calculateComposition();
  }

  // Calculate protons, neutrons, electrons, and element details
  calculateComposition() {
    // Ensure number of protons equals the atomic number
    if (this.atomicNumber !== this.protons) {
      this.protons = this.atomicNumber;
    }
    
    // Calculate neutrons based on atomic mass and atomic number
    if (this.atomicMass && this.atomicNumber) {
      this.neutrons = Math.round(this.atomicMass - this.atomicNumber);
    }

    // Calculate electrons based on charge (normal atom if no charge)
    if (this.charge) {
      this.electrons = this.atomicNumber - this.charge;
    } else {
      this.electrons = this.atomicNumber;
    }

    // Fetch element details based on atomic number
    if (this.atomicNumber > 0) {
      const element = this.elements.find(el => el.atomicNumber === this.atomicNumber);
      if (element) {
        this.elementName = element.name;
        this.azeNotation = `${element.symbol}-${this.atomicNumber}`;
        this.totalMass = element.atomicMass;
      }
    }

    // Check for any negative values (protons, neutrons) and show warning if needed
    this.showToastOnNegativeValues();
  }

  // Show toast when negative values are entered for neutrons or protons
  async showToastOnNegativeValues() {
    if (this.neutrons < 0) {
      const toast = await this.toastController.create({
        message: 'The number of neutrons cannot be negative.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
    if (this.protons < 1 || this.protons > 118) {
      const toast = await this.toastController.create({
        message: 'The number of protons must be between 1 and 118.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  // General toast message handler
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }

  // Toggle visibility of element details card
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  clearAll() {
    this.atomicNumber = NaN;
    this.atomicMass = NaN;
    this.charge = NaN;
    this.protons = NaN;
    this.neutrons = NaN;
    this.electrons = NaN;
    this.elementName = '';
    this.azeNotation = '';
    this.totalMass = NaN;
  }
}
