import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && !this.auth.isAuthenticated()) {
      void this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigate(['/login']);
  }
}