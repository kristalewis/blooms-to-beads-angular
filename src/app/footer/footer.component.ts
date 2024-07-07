import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from '../enum/route-path.enum';

@Component({
  selector: 'btb-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private _routePaths = RoutePath;

  private _router: Router = inject(Router);

  onEmailClicked(): void {
    this._router.navigate([this._routePaths.CONTACT]);
  }
}
