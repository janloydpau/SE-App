import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Redirect to the login page after 3 seconds
    setTimeout(() => {
      this.router.navigate(['/percentionic']);
    }, 5000); // 3000ms = 3 seconds
  }
}
