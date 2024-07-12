import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { RoutePath } from '../enum/route-path.enum';
import { ProductPage } from '../model/product-page';
import { PRODUCT_PAGE_PRODUCT_CARDS } from './product.props';

@Component({
  selector: 'btb-product',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  pageLayout: ProductPage | undefined = undefined;

  private _router: Router = inject(Router);

  constructor() {
    const routePath = <RoutePath>this._router.url.split("/")[1];
    this.pageLayout = PRODUCT_PAGE_PRODUCT_CARDS.get(routePath);
  }
}
