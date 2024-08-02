import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { RoutePath } from '../enum/route-path.enum';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  const routerMock = {
    navigate: jasmine.createSpy("navigate")
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to contact page', () => {
    component.onEmailClicked();
    expect(routerMock.navigate).toHaveBeenCalledWith([RoutePath.CONTACT]);
  });
});
