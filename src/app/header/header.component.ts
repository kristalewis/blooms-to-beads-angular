import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RoutePath } from '../enum/route-path.enum';


@Component({
  selector: 'btb-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | null = null;

  routePaths = RoutePath;

  private _router: Router = inject(Router);

  constructor() {}

  onNavItemClicked(routePath: RoutePath): void {
    this._router.navigate([routePath]);
  }
}
