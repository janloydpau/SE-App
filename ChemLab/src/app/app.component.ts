import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {

  showGeneral: boolean = false;
  showBiochem: boolean = false;

  public appPages = [
    { title: 'Percent Ionic', url: '/percentionic', icon: 'moon' },
    { title: 'Percent Composition', url: '/percentcomposition', icon: 'barbell' },
    { title: 'Atom Name', url: '/atom-name', icon: 'american-football' },
    { title: 'Atom Mass', url: '/atomicmass', icon: 'bowling-ball' },
    { title: 'Electron Configuration', url: '/electronconfiguration', icon: 'barbell' },
    { title: 'Electronegativity', url: '/electronegativity', icon: 'water' },
    { title: 'Chemical Name', url: '/chemname', icon: 'thermometer' },
    { title: 'pKₐ', url: '/apk', icon: 'water' },
    
  ];
  public appPages_second = [
    { title: 'Resuspension', url: '/resuspension', icon: 'construct'},
    { title: 'Protein Solubility', url: '/protein-solubility', icon: 'skull'},
    { title: 'Michaelis-Menten Equation', url: '/mme', icon: 'barbell'},
    { title: 'Enzyme Activity', url: '/enzymeactivity', icon: 'moon'},
    { title: 'Isoelectric Point', url: '/isoelectric', icon: 'water'},
    
  ];
  constructor(private menuCtrl: MenuController, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Disable the menu on login or starting page
        if (['/login', '/splash'].includes(event.url)) {
          this.menuCtrl.enable(false); // Disable the menu
        } else {
          this.menuCtrl.enable(true); // Enable the menu for other pages
        }
      }
    });
  }
}
