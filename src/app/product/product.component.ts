import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from '../enum/route-path.enum';

@Component({
  selector: 'btb-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  private _router: Router = inject(Router);

  constructor() {
    const routePath = <RoutePath>this._router.url.split("/")[1];
    console.log(routePath);
  }
}
