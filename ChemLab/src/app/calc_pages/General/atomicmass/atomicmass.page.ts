import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-atomicmass',
  templateUrl: './atomicmass.page.html',
  styleUrls: ['./atomicmass.page.scss'],
})
export class AtomicmassPage implements OnInit {
  protons: number = NaN;
  neutrons: number = NaN;
  atomicMass: number = NaN;
  atomicMassSI: number = NaN;
  massNumber: number = NaN;

  selectedAtomicMass: string = 'u'; // Default unit for atomic mass
  selectedAtomicMassSI: string = 'x10^-28'; // Default set to 'x10^-26'

  showSymbolCard: boolean = false;
  atomicSymbol: string = '';
  isStable: boolean = false;

  atomicMassOptions = [
    { value: 'ng', label: 'Nanograms (ng)' },
    { value: 'me', label: 'Electron rest mass (me)' },
    { value: 'mp', label: 'Proton rest mass (mp)' },
    { value: 'mn', label: 'Neutron rest mass (mn)' },
    { value: 'u', label: 'Atomic mass units (u)' },
  ];

  atomicMassSIOptions = [
    { value: 'x10^-28', label: 'x10⁻²⁸' },
    { value: 'x10^-27', label: 'x10⁻²⁷' },
    { value: 'x10^-26', label: 'x10⁻²⁶' },
    { value: 'x10^-25', label: 'x10⁻²⁵' },
  ];

  private baseAtomicMass: number = NaN; // Store atomic mass in ng
  private baseAtomicMassSI: number = NaN; // Store atomic mass SI in kg

  constructor(private toastController: ToastController) {}

  ngOnInit() {}

  onAtomicMassUnitChange() {
    if (!isNaN(this.baseAtomicMass)) {
      this.atomicMass = this.convertAtomicMass(this.baseAtomicMass, 'ng', this.selectedAtomicMass);
    }
  }

  onAtomicMassSIUnitChange() {
    if (!isNaN(this.baseAtomicMassSI)) {
      this.atomicMassSI = this.convertAtomicMassSI(this.baseAtomicMassSI, 'kg', this.selectedAtomicMassSI);
    }
  }

  onAtomicMassInputChange() {
    if (!isNaN(this.atomicMass)) {
      this.baseAtomicMass = this.convertAtomicMass(this.atomicMass, this.selectedAtomicMass, 'ng');
    }
  }

  onAtomicMassSIInputChange() {
    if (!isNaN(this.atomicMassSI)) {
      this.baseAtomicMassSI = this.convertAtomicMassSI(this.atomicMassSI, this.selectedAtomicMassSI, 'kg');
    }
  }

  onProtonOrNeutronChange() {
    const maxProtons = 118; // Oganesson (Og)
    const maxNeutrons = 176; // Neutron count for Og

    // Show toast if input exceeds max protons or neutrons
    if (this.protons > maxProtons) {
      this.showToast('The number of protons exceeds the known limit which is 118.');
    }
    if(this.neutrons > maxNeutrons){
      this.showToast('The number of protons or neutrons exceeds the known limit which is 176.');
    }

    if (this.protons && this.neutrons) {
      this.calculateMassNumber();
      this.calculateAtomicMassValues();
      this.generateSymbolAndStability();
      this.showSymbolCard = true;
    }
  }

  private calculateMassNumber() {
    this.massNumber = this.protons + this.neutrons;
  }

  private calculateAtomicMassValues() {
    // Use atomic mass unit (u) to get the mass number in kg (1 amu = 1.66053906660e-27 kg)
    this.baseAtomicMass = this.massNumber * 1.66053906660e-27 * 1e12; // in ng (for the atomic mass input)
    this.baseAtomicMassSI = this.massNumber * 1.66053906660e-27; // in kg (for the atomic mass SI input)

    // Convert to the selected atomic mass unit
    this.atomicMass = this.convertAtomicMass(this.baseAtomicMass, 'ng', this.selectedAtomicMass);

    // Convert the mass number to SI units (kg) depending on the selected SI unit
    this.atomicMassSI = this.convertAtomicMassSI(this.baseAtomicMassSI, 'kg', this.selectedAtomicMassSI);
  }

  private generateSymbolAndStability() {
    // Get the element symbol based on protons
    this.atomicSymbol = this.getElementSymbol(this.protons);

    // Stability check based on proton-to-neutron ratio
    const nToPRatio = this.neutrons / this.protons;
    this.isStable = this.checkStability(this.protons, this.neutrons);
  }

  private getElementSymbol(protons: number): string {
    const elements = [
      '', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg',
      'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 
      'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 
      'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 
      'Sb', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 
      'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 
      'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 
      'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 
      'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 
      'Ts', 'Og'
    ];

    return elements[protons] || 'Unknown';
  }

  private checkStability(protons: number, neutrons: number): boolean {
    const nToPRatio = neutrons / protons;
    return (protons <= 20 && Math.abs(nToPRatio - 1) <= 0.1) || 
           (protons > 20 && Math.abs(nToPRatio - 1.5) <= 0.2);
  }

  private convertAtomicMass(value: number, fromUnit: string, toUnit: string): number {
    const kgToNg = 1e12;
    const conversions: { [key: string]: number } = {
      ng: 1,
      me: 9.10938356e-31 * kgToNg,
      mp: 1.6726219e-27 * kgToNg,
      mn: 1.6749275e-27 * kgToNg,
      u: 1.66053906660e-27 * kgToNg,
    };
    return (value * conversions[fromUnit]) / conversions[toUnit];
  }

  private convertAtomicMassSI(value: number, fromUnit: string, toUnit: string): number {
    const conversions: { [key: string]: number } = {
      'x10^-28': 10000000000000000000000000000,
      'x10^-27': 1000000000000000000000000000,
      'x10^-26': 100000000000000000000000000,
      'x10^-25': 10000000000000000000000000,
    };
    return value * (conversions[toUnit] || 1);
  }

  // Show a toast message
  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // 3 seconds
      position: 'bottom',
    });
    toast.present();
  }

  clearFields() {
    this.protons = NaN;
    this.neutrons = NaN;
    this.atomicMass = NaN;
    this.atomicMassSI = NaN;
    this.massNumber = NaN;
    this.selectedAtomicMass = 'u'; // Default set to 'u'
    this.selectedAtomicMassSI = 'x10^-28';
    this.baseAtomicMass = NaN;
    this.baseAtomicMassSI = NaN;
    this.showSymbolCard = false;
  }
}
