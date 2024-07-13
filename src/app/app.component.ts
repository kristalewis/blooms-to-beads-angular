import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, inject, OnDestroy, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { MatListModule } from '@angular/material/list';
import { RoutePath } from './enum/route-path.enum';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'btb-app',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  @ViewChild(MatSidenav) sideNav: MatSidenav | null = null;

  mobileQuery: MediaQueryList;

  routePaths = RoutePath;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      if (event.target.innerWidth > 800) {
        this.closeSideNav();
      }
    }

  private _mobileQueryListener: () => void;

  private _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private _media: MediaMatcher = inject(MediaMatcher);
  private _router: Router = inject(Router);

  constructor() {
    this.mobileQuery = this._media.matchMedia('(max-width: 599px)');
    this._mobileQueryListener = () => this._changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  onNavItemClicked(routePath: RoutePath): void {
    this._router.navigate([routePath]);
    this.closeSideNav();
  }

  closeSideNav(): void {
    this.sideNav?.close();
  }
}
