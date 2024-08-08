import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { RoutePath } from '../enum/route-path.enum';
import { ProductPage } from '../model/product-page';
import { PRODUCT_PAGE_PRODUCT_CARDS } from './product.props';

@Component({
  selector: 'btb-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, LightboxModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  pageLayout: ProductPage | undefined = undefined;

  private _lightbox: Lightbox= inject(Lightbox);
  private _router: Router = inject(Router);

  constructor() {
    const routePath = <RoutePath>this._router.url.split("/")[1];
    this.pageLayout = PRODUCT_PAGE_PRODUCT_CARDS.get(routePath);
  }

  viewImage(imagePath: string) {
    const album = { src: imagePath, thumb: '' };
    this._lightbox.open([album], 0, { positionFromTop: 100, fitImageInViewPort: false, enableTransition: false });
  }
}
