import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { RoutePath } from '../enum/route-path.enum';
import { HOME_PAGE_PRODUCT_CARDS } from './home.props';

@Component({
  selector: 'btb-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  productCards = HOME_PAGE_PRODUCT_CARDS;

  private _router: Router = inject(Router);

  routeToProductPage(route: RoutePath | null): void {
    if (route) {
      this._router.navigate([route]);
    }
  }
}
