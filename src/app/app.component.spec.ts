import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutePath } from './enum/route-path.enum';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  const routerMock = {
    navigate: jasmine.createSpy("navigate")
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideAnimations(),
        { provide: Router, useValue: routerMock },
      ]  
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app component', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger onResize method when window is resized', () => {
    const spyOnResize = spyOn(component, 'onResize').and.callThrough();
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(spyOnResize).toHaveBeenCalled();
  });

  it('should not close side nav if window width is 800', () => {
    const spyOnCloseSideNav = spyOn(component, 'closeSideNav');
    spyOnProperty(window, 'innerWidth').and.returnValue(800);
    window.dispatchEvent(new Event('resize'));
    expect(spyOnCloseSideNav).not.toHaveBeenCalled();
  });

  it('should close side nav if window width is greater than 800', () => {
    const spyOnCloseSideNav = spyOn(component, 'closeSideNav');
    spyOnProperty(window, 'innerWidth').and.returnValue(801);
    window.dispatchEvent(new Event('resize'));
    expect(spyOnCloseSideNav).toHaveBeenCalled();
  });

  it('should navigate to route and close size nav', () => {
    const routePath = RoutePath.ABOUT;
    const spyOnCloseSideNav = spyOn(component, 'closeSideNav');
    component.onNavItemClicked(routePath);
    expect(routerMock.navigate).toHaveBeenCalledWith([routePath]);
    expect(spyOnCloseSideNav).toHaveBeenCalled();
  });

  it('should close size nav', () => {
    let spyOnCloseSideNav;
    if (component.sideNav) {
      spyOnCloseSideNav = spyOn(component.sideNav, 'close');
    }
    component.closeSideNav();
    expect(spyOnCloseSideNav).toHaveBeenCalled();
  });
});
