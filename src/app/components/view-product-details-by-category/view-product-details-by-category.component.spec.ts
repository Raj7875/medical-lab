import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductDetailsByCategoryComponent } from './view-product-details-by-category.component';

describe('ViewProductDetailsByCategoryComponent', () => {
  let component: ViewProductDetailsByCategoryComponent;
  let fixture: ComponentFixture<ViewProductDetailsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductDetailsByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductDetailsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
