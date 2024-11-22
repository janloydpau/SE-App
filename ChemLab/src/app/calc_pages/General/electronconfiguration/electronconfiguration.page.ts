import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronconfiguration',
  templateUrl: './electronconfiguration.page.html',
  styleUrls: ['./electronconfiguration.page.scss'],
})
export class ElectronconfigurationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedElement: string = ''; // Store the selected element symbol
  selectedElementData: any = { 
    name: 'Element Name', 
    symbol: 'Symbol', 
    atomicNumber: '', 
    atomicMass: '', 
    electronConfiguration: '', 
    valenceElectrons: '' 
  }; // Default empty data

  // Complete list of elements with atomic numbers and masses
  elements = [
    { name: 'Hydrogen', symbol: 'H', atomicNumber: 1, atomicMass: 1.008, electronConfiguration: '1s1', valenceElectrons: '1s1' },
  { name: 'Helium', symbol: 'He', atomicNumber: 2, atomicMass: 4.0026, electronConfiguration: '1s2', valenceElectrons: '1s2' },
  { name: 'Lithium', symbol: 'Li', atomicNumber: 3, atomicMass: 6.94, electronConfiguration: '1s2 2s1', valenceElectrons: '2s1' },
  { name: 'Beryllium', symbol: 'Be', atomicNumber: 4, atomicMass: 9.0122, electronConfiguration: '1s2 2s2', valenceElectrons: '2s2' },
  { name: 'Boron', symbol: 'B', atomicNumber: 5, atomicMass: 10.81, electronConfiguration: '1s2 2s2 2p1', valenceElectrons: '2s2 2p1' },
  { name: 'Carbon', symbol: 'C', atomicNumber: 6, atomicMass: 12.011, electronConfiguration: '1s2 2s2 2p2', valenceElectrons: '2s2 2p2' },
  { name: 'Nitrogen', symbol: 'N', atomicNumber: 7, atomicMass: 14.007, electronConfiguration: '1s2 2s2 2p3', valenceElectrons: '2s2 2p3' },
  { name: 'Oxygen', symbol: 'O', atomicNumber: 8, atomicMass: 15.999, electronConfiguration: '1s2 2s2 2p4', valenceElectrons: '2s2 2p4' },
  { name: 'Fluorine', symbol: 'F', atomicNumber: 9, atomicMass: 18.998, electronConfiguration: '1s2 2s2 2p5', valenceElectrons: '2s2 2p5' },
  { name: 'Neon', symbol: 'Ne', atomicNumber: 10, atomicMass: 20.180, electronConfiguration: '1s2 2s2 2p6', valenceElectrons: '2s2 2p6' },
  { name: 'Sodium', symbol: 'Na', atomicNumber: 11, atomicMass: 22.990, electronConfiguration: '1s2 2s2 2p6 3s1', valenceElectrons: '3s1' },
  { name: 'Magnesium', symbol: 'Mg', atomicNumber: 12, atomicMass: 24.305, electronConfiguration: '1s2 2s2 2p6 3s2', valenceElectrons: '3s2' },
  { name: 'Aluminum', symbol: 'Al', atomicNumber: 13, atomicMass: 26.982, electronConfiguration: '1s2 2s2 2p6 3s2 3p1', valenceElectrons: '3s2 3p1' },
  { name: 'Silicon', symbol: 'Si', atomicNumber: 14, atomicMass: 28.085, electronConfiguration: '1s2 2s2 2p6 3s2 3p2', valenceElectrons: '3s2 3p2' },
  { name: 'Phosphorus', symbol: 'P', atomicNumber: 15, atomicMass: 30.974, electronConfiguration: '1s2 2s2 2p6 3s2 3p3', valenceElectrons: '3s2 3p3' },
  { name: 'Sulfur', symbol: 'S', atomicNumber: 16, atomicMass: 32.06, electronConfiguration: '1s2 2s2 2p6 3s2 3p4', valenceElectrons: '3s2 3p4' },
  { name: 'Chlorine', symbol: 'Cl', atomicNumber: 17, atomicMass: 35.45, electronConfiguration: '1s2 2s2 2p6 3s2 3p5', valenceElectrons: '3s2 3p5' },
  { name: 'Argon', symbol: 'Ar', atomicNumber: 18, atomicMass: 39.948, electronConfiguration: '1s2 2s2 2p6 3s2 3p6', valenceElectrons: '3s2 3p6' },
  { name: 'Potassium', symbol: 'K', atomicNumber: 19, atomicMass: 39.098, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s1', valenceElectrons: '4s1' },
  { name: 'Calcium', symbol: 'Ca', atomicNumber: 20, atomicMass: 40.078, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2', valenceElectrons: '4s2' },
  { name: 'Scandium', symbol: 'Sc', atomicNumber: 21, atomicMass: 44.956, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d1', valenceElectrons: '4s2 3d1' },
  { name: 'Titanium', symbol: 'Ti', atomicNumber: 22, atomicMass: 47.867, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d2', valenceElectrons: '4s2 3d2' },
  { name: 'Vanadium', symbol: 'V', atomicNumber: 23, atomicMass: 50.942, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d3', valenceElectrons: '4s2 3d3' },
  { name: 'Chromium', symbol: 'Cr', atomicNumber: 24, atomicMass: 52.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s1 3d5', valenceElectrons: '4s1 3d5' },
  { name: 'Manganese', symbol: 'Mn', atomicNumber: 25, atomicMass: 54.938, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d5', valenceElectrons: '4s2 3d5' },
  { name: 'Iron', symbol: 'Fe', atomicNumber: 26, atomicMass: 55.845, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d6', valenceElectrons: '4s2 3d6' },
  { name: 'Cobalt', symbol: 'Co', atomicNumber: 27, atomicMass: 58.933, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d7', valenceElectrons: '4s2 3d7' },
  { name: 'Nickel', symbol: 'Ni', atomicNumber: 28, atomicMass: 58.693, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d8', valenceElectrons: '4s2 3d8' },
  { name: 'Copper', symbol: 'Cu', atomicNumber: 29, atomicMass: 63.546, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d9', valenceElectrons: '4s2 3d9' },
  { name: 'Zinc', symbol: 'Zn', atomicNumber: 30, atomicMass: 65.38, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10', valenceElectrons: '4s2 3d10' },
  { name: 'Gallium', symbol: 'Ga', atomicNumber: 31, atomicMass: 69.723, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1', valenceElectrons: '4s2 3d10 4p1' },
  { name: 'Germanium', symbol: 'Ge', atomicNumber: 32, atomicMass: 72.63, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2', valenceElectrons: '4s2 3d10 4p2' },
  { name: 'Arsenic', symbol: 'As', atomicNumber: 33, atomicMass: 74.922, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3', valenceElectrons: '4s2 3d10 4p3' },
  { name: 'Selenium', symbol: 'Se', atomicNumber: 34, atomicMass: 78.971, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4', valenceElectrons: '4s2 3d10 4p4' },
  { name: 'Bromine', symbol: 'Br', atomicNumber: 35, atomicMass: 79.904, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5', valenceElectrons: '4s2 3d10 4p5' },
  { name: 'Krypton', symbol: 'Kr', atomicNumber: 36, atomicMass: 83.798, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6', valenceElectrons: '4s2 3d10 4p6' },
  { name: 'Rubidium', symbol: 'Rb', atomicNumber: 37, atomicMass: 85.468, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1', valenceElectrons: '5s1' },
  { name: 'Strontium', symbol: 'Sr', atomicNumber: 38, atomicMass: 87.62, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2', valenceElectrons: '5s2' },
  { name: 'Yttrium', symbol: 'Y', atomicNumber: 39, atomicMass: 88.906, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1', valenceElectrons: '5s2 4d1' },
  { name: 'Zirconium', symbol: 'Zr', atomicNumber: 40, atomicMass: 91.224, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2', valenceElectrons: '5s2 4d2' },
  { name: 'Niobium', symbol: 'Nb', atomicNumber: 41, atomicMass: 92.906, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d3', valenceElectrons: '5s2 4d3' },
  { name: 'Molybdenum', symbol: 'Mo', atomicNumber: 42, atomicMass: 95.95, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d4', valenceElectrons: '5s2 4d4' },
  { name: 'Technetium', symbol: 'Tc', atomicNumber: 43, atomicMass: 98.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5', valenceElectrons: '5s2 4d5' },
  { name: 'Ruthenium', symbol: 'Ru', atomicNumber: 44, atomicMass: 101.07, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d6', valenceElectrons: '5s2 4d6' },
  { name: 'Rhodium', symbol: 'Rh', atomicNumber: 45, atomicMass: 102.91, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d7', valenceElectrons: '5s2 4d7' },
  { name: 'Palladium', symbol: 'Pd', atomicNumber: 46, atomicMass: 106.42, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d8', valenceElectrons: '5s2 4d8' },
  { name: 'Silver', symbol: 'Ag', atomicNumber: 47, atomicMass: 107.868, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10', valenceElectrons: '5s1 4d10' },
  { name: 'Cadmium', symbol: 'Cd', atomicNumber: 48, atomicMass: 112.41, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10', valenceElectrons: '5s2 4d10' },
  { name: 'Indium', symbol: 'In', atomicNumber: 49, atomicMass: 114.82, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1', valenceElectrons: '5s2 4d10 5p1' },
  { name: 'Tin', symbol: 'Sn', atomicNumber: 50, atomicMass: 118.71, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2', valenceElectrons: '5s2 4d10 5p2' },
  { name: 'Antimony', symbol: 'Sb', atomicNumber: 51, atomicMass: 121.76, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3', valenceElectrons: '5s2 4d10 5p3' },
  { name: 'Tellurium', symbol: 'Te', atomicNumber: 52, atomicMass: 127.60, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4', valenceElectrons: '5s2 4d10 5p4' },
  { name: 'Iodine', symbol: 'I', atomicNumber: 53, atomicMass: 126.90, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5', valenceElectrons: '5s2 4d10 5p5' },
  { name: 'Xenon', symbol: 'Xe', atomicNumber: 54, atomicMass: 131.293, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6', valenceElectrons: '5s2 4d10 5p6' },
  { name: 'Cesium', symbol: 'Cs', atomicNumber: 55, atomicMass: 132.905, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1', valenceElectrons: '6s1' },
  { name: 'Barium', symbol: 'Ba', atomicNumber: 56, atomicMass: 137.33, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2', valenceElectrons: '6s2' },
  { name: 'Lanthanum', symbol: 'La', atomicNumber: 57, atomicMass: 138.905, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1', valenceElectrons: '6s2 5d1' },
  { name: 'Cerium', symbol: 'Ce', atomicNumber: 58, atomicMass: 140.116, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f1', valenceElectrons: '6s2 4f1' },
  { name: 'Praseodymium', symbol: 'Pr', atomicNumber: 59, atomicMass: 140.907, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3', valenceElectrons: '6s2 4f3' },
  { name: 'Neodymium', symbol: 'Nd', atomicNumber: 60, atomicMass: 144.242, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4', valenceElectrons: '6s2 4f4' },
  { name: 'Promethium', symbol: 'Pm', atomicNumber: 61, atomicMass: 145.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5', valenceElectrons: '6s2 4f5' },
  { name: 'Samarium', symbol: 'Sm', atomicNumber: 62, atomicMass: 150.36, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6', valenceElectrons: '6s2 4f6' },
  { name: 'Europium', symbol: 'Eu', atomicNumber: 63, atomicMass: 151.984, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7', valenceElectrons: '6s2 4f7' },
  { name: 'Gadolinium', symbol: 'Gd', atomicNumber: 64, atomicMass: 157.25, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1', valenceElectrons: '6s2 4f7 5d1' },
  { name: 'Terbium', symbol: 'Tb', atomicNumber: 65, atomicMass: 158.925, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9', valenceElectrons: '6s2 4f9' },
  { name: 'Dysprosium', symbol: 'Dy', atomicNumber: 66, atomicMass: 162.5, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10', valenceElectrons: '6s2 4f10' },
  { name: 'Holmium', symbol: 'Ho', atomicNumber: 67, atomicMass: 164.930, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11', valenceElectrons: '6s2 4f11' },
  { name: 'Erbium', symbol: 'Er', atomicNumber: 68, atomicMass: 167.259, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12', valenceElectrons: '6s2 4f12' },
  { name: 'Thulium', symbol: 'Tm', atomicNumber: 69, atomicMass: 168.934, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13', valenceElectrons: '6s2 4f13' },
  { name: 'Ytterbium', symbol: 'Yb', atomicNumber: 70, atomicMass: 173.04, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14', valenceElectrons: '6s2 4f14' },
  { name: 'Lutetium', symbol: 'Lu', atomicNumber: 71, atomicMass: 175.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1', valenceElectrons: '6s2 4f14 5d1' },
  { name: 'Hafnium', symbol: 'Hf', atomicNumber: 72, atomicMass: 178.49, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2', valenceElectrons: '6s2 4f14 5d2' },
  { name: 'Tantalum', symbol: 'Ta', atomicNumber: 73, atomicMass: 180.947, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3', valenceElectrons: '6s2 4f14 5d3' },
  { name: 'Tungsten', symbol: 'W', atomicNumber: 74, atomicMass: 183.84, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4', valenceElectrons: '6s2 4f14 5d4' },
  { name: 'Rhenium', symbol: 'Re', atomicNumber: 75, atomicMass: 186.207, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5', valenceElectrons: '6s2 4f14 5d5' },
  { name: 'Osmium', symbol: 'Os', atomicNumber: 76, atomicMass: 190.23, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6', valenceElectrons: '6s2 4f14 5d6' },
  { name: 'Iridium', symbol: 'Ir', atomicNumber: 77, atomicMass: 192.217, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7', valenceElectrons: '6s2 4f14 5d7' },
  { name: 'Platinum', symbol: 'Pt', atomicNumber: 78, atomicMass: 195.084, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d8', valenceElectrons: '6s2 4f14 5d8' },
  { name: 'Gold', symbol: 'Au', atomicNumber: 79, atomicMass: 196.967, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10', valenceElectrons: '6s2 4f14 5d10' },
  { name: 'Mercury', symbol: 'Hg', atomicNumber: 80, atomicMass: 200.592, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10', valenceElectrons: '6s2 4f14 5d10' },
  { name: 'Thallium', symbol: 'Tl', atomicNumber: 81, atomicMass: 204.38, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1', valenceElectrons: '6s2 4f14 5d10 6p1' },
  { name: 'Lead', symbol: 'Pb', atomicNumber: 82, atomicMass: 207.2, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2', valenceElectrons: '6s2 4f14 5d10 6p2' },
  { name: 'Bismuth', symbol: 'Bi', atomicNumber: 83, atomicMass: 208.980, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3', valenceElectrons: '6s2 4f14 5d10 6p3' },
  { name: 'Polonium', symbol: 'Po', atomicNumber: 84, atomicMass: 209.982, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4', valenceElectrons: '6s2 4f14 5d10 6p4' },
  { name: 'Astatine', symbol: 'At', atomicNumber: 85, atomicMass: 210.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5', valenceElectrons: '6s2 4f14 5d10 6p5' },
  { name: 'Radon', symbol: 'Rn', atomicNumber: 86, atomicMass: 222.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6', valenceElectrons: '6s2 4f14 5d10 6p6' },
  { name: 'Francium', symbol: 'Fr', atomicNumber: 87, atomicMass: 223.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1', valenceElectrons: '7s1' },
  { name: 'Radium', symbol: 'Ra', atomicNumber: 88, atomicMass: 226.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2', valenceElectrons: '7s2' },
  { name: 'Actinium', symbol: 'Ac', atomicNumber: 89, atomicMass: 227.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1', valenceElectrons: '7s2 6d1' },
  { name: 'Thorium', symbol: 'Th', atomicNumber: 90, atomicMass: 232.038, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2', valenceElectrons: '7s2 6d2' },
  { name: 'Protactinium', symbol: 'Pa', atomicNumber: 91, atomicMass: 231.035, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2', valenceElectrons: '7s2 5f2' },
  { name: 'Uranium', symbol: 'U', atomicNumber: 92, atomicMass: 238.028, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3', valenceElectrons: '7s2 5f3' },
  { name: 'Neptunium', symbol: 'Np', atomicNumber: 93, atomicMass: 237.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4', valenceElectrons: '7s2 5f4' },
  { name: 'Plutonium', symbol: 'Pu', atomicNumber: 94, atomicMass: 244.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6', valenceElectrons: '7s2 5f6' },
  { name: 'Americium', symbol: 'Am', atomicNumber: 95, atomicMass: 243.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7', valenceElectrons: '7s2 5f7' },
  { name: 'Curium', symbol: 'Cm', atomicNumber: 96, atomicMass: 247.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7', valenceElectrons: '7s2 5f7' },
  { name: 'Berkelium', symbol: 'Bk', atomicNumber: 97, atomicMass: 247.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9', valenceElectrons: '7s2 5f9' },
  { name: 'Californium', symbol: 'Cf', atomicNumber: 98, atomicMass: 251.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10', valenceElectrons: '7s2 5f10' },
  { name: 'Einsteinium', symbol: 'Es', atomicNumber: 99, atomicMass: 252.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11', valenceElectrons: '7s2 5f11' },
  { name: 'Fermium', symbol: 'Fm', atomicNumber: 100, atomicMass: 257.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12', valenceElectrons: '7s2 5f12' },
  { name: 'Mendelevium', symbol: 'Md', atomicNumber: 101, atomicMass: 258.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13', valenceElectrons: '7s2 5f13' },
  { name: 'Nobelium', symbol: 'No', atomicNumber: 102, atomicMass: 259.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14', valenceElectrons: '7s2 5f14' },
  { name: 'Lawrencium', symbol: 'Lr', atomicNumber: 103, atomicMass: 262.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d1', valenceElectrons: '7s2 5f14 6d1' },
  { name: 'Rutherfordium', symbol: 'Rf', atomicNumber: 104, atomicMass: 267.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2', valenceElectrons: '7s2 5f14 6d2' },
  { name: 'Dubnium', symbol: 'Db', atomicNumber: 105, atomicMass: 270.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3', valenceElectrons: '7s2 5f14 6d3' },
  { name: 'Seaborgium', symbol: 'Sg', atomicNumber: 106, atomicMass: 271.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4', valenceElectrons: '7s2 5f14 6d4' },
  { name: 'Bohrium', symbol: 'Bh', atomicNumber: 107, atomicMass: 270.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5', valenceElectrons: '7s2 5f14 6d5' },
  { name: 'Hassium', symbol: 'Hs', atomicNumber: 108, atomicMass: 277.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6', valenceElectrons: '7s2 5f14 6d6' },
  { name: 'Meitnerium', symbol: 'Mt', atomicNumber: 109, atomicMass: 278.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7', valenceElectrons: '7s2 5f14 6d7' },
  { name: 'Darmstadtium', symbol: 'Ds', atomicNumber: 110, atomicMass: 281.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8', valenceElectrons: '7s2 5f14 6d8' },
  { name: 'Roentgenium', symbol: 'Rg', atomicNumber: 111, atomicMass: 280.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9', valenceElectrons: '7s2 5f14 6d9' },
  { name: 'Copernicium', symbol: 'Cn', atomicNumber: 112, atomicMass: 285.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10', valenceElectrons: '7s2 5f14 6d10' },
  { name: 'Nihonium', symbol: 'Nh', atomicNumber: 113, atomicMass: 284.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10', valenceElectrons: '7s2 5f14 6d10' },
  { name: 'Flerovium', symbol: 'Fl', atomicNumber: 114, atomicMass: 289.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2', valenceElectrons: '7s2 5f14 6d10 7p2' },
  { name: 'Moscovium', symbol: 'Mc', atomicNumber: 115, atomicMass: 288.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3', valenceElectrons: '7s2 5f14 6d10 7p3' },
  { name: 'Livermorium', symbol: 'Lv', atomicNumber: 116, atomicMass: 293.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4', valenceElectrons: '7s2 5f14 6d10 7p4' },
  { name: 'Tennessine', symbol: 'Ts', atomicNumber: 117, atomicMass: 294.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5', valenceElectrons: '7s2 5f14 6d10 7p5' },
  { name: 'Oganesson', symbol: 'Og', atomicNumber: 118, atomicMass: 294.0, electronConfiguration: '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6', valenceElectrons: '7s2 5f14 6d10 7p6' }
  ];

  // This function is called when the element is selected
  onElementChange() {
    // Find the data of the selected element
    this.selectedElementData = this.elements.find(element => element.symbol === this.selectedElement) || { 
      name: 'Element Name', 
      symbol: '', 
      atomicNumber: '', 
      atomicMass: '', 
      electronConfiguration: '', 
      valenceElectrons: '' 
    };
  }
  clearInputs() {
    this.selectedElement = ''; // Reset the selected element
    this.selectedElementData = { 
      name: 'Element Name', 
      symbol: 'Symbol', 
      atomicNumber: '', 
      atomicMass: '', 
      electronConfiguration: '', 
      valenceElectrons: '' 
    }; // Reset element data to default
  }
}
