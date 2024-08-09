import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ProductCard } from '../model/product-card';
import { ProductPage } from '../model/product-page';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create product component', () => {
    expect(component).toBeTruthy();
  });

  it('should open image in lightbox when image is clicked', () => {
    fixture.componentInstance.pageLayout = { title: "Test", productCards: [{} as ProductCard] } as ProductPage;
    fixture.detectChanges();
    const viewImageSpy = spyOn(component, "viewImage").and.callThrough();
    const imageDebugElem = fixture.debugElement.query(By.css('img'));
    imageDebugElem.nativeElement.click();
    expect(viewImageSpy).toHaveBeenCalled();
  });
});
