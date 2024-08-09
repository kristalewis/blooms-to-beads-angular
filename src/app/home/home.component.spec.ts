import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RoutePath } from '../enum/route-path.enum';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const routerMock = {
    navigate: jasmine.createSpy("navigate")
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, BrowserAnimationsModule],
      providers: [{ provide: Router, useValue: routerMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    routerMock.navigate.calls.reset();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to route', () => {
    const routePath = RoutePath.ABOUT;
    component.routeToProductPage(routePath);
    expect(routerMock.navigate).toHaveBeenCalledWith([routePath]);
  });

  it('should not navigate to route', () => {
    component.routeToProductPage(null);
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should open image in lightbox when image is clicked', () => {
    const viewImageSpy = spyOn(component, "viewImage").and.callThrough();
    const imageDebugElem = fixture.debugElement.query(By.css('img'));
    imageDebugElem.nativeElement.click();
    expect(viewImageSpy).toHaveBeenCalled();
  });
});
