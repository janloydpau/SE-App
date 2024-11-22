import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isoelectric',
  templateUrl: './isoelectric.page.html',
  styleUrls: ['./isoelectric.page.scss'],
})
export class IsoelectricPage implements OnInit {
  pKa: number | null = null;
  pKb: number | null = null;
  pI: number | null = null;

  constructor() {}

  ngOnInit() {}

  calculateIsoelectricPoint(changedInput: string) {
    if (changedInput === 'pKa' && this.pKa !== null && this.pKb !== null) {
      // Update pI when pKa changes
      this.pI = (this.pKa + this.pKb) / 2;
    } else if (changedInput === 'pKb' && this.pKb !== null && this.pKa !== null) {
      // Update pI when pKb changes
      this.pI = (this.pKa + this.pKb) / 2;
    } else if (changedInput === 'pI' && this.pI !== null) {
      // Update pKa or pKb when pI changes
      if (this.pKa !== null) {
        this.pKb = 2 * this.pI - this.pKa;
      } else if (this.pKb !== null) {
        this.pKa = 2 * this.pI - this.pKb;
      }
    }
  }

  clearInputs() {
    this.pKa = null;
    this.pKb = null;
    this.pI = null;
  }
}
