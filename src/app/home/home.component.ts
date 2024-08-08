import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { RoutePath } from '../enum/route-path.enum';
import { HOME_PAGE_PRODUCT_CARDS } from './home.props';

@Component({
  selector: 'btb-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, LightboxModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  productCards = HOME_PAGE_PRODUCT_CARDS;

  private _lightbox: Lightbox= inject(Lightbox);
  private _router: Router = inject(Router);

  routeToProductPage(route: RoutePath | null): void {
    if (route) {
      this._router.navigate([route]);
    }
  }

  viewImage(imagePath: string) {
    const album = { src: imagePath, thumb: '' };
    this._lightbox.open([album], 0, { positionFromTop: 100, fitImageInViewPort: false, enableTransition: false });
  }
}
