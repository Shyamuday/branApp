import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBrandComponent } from './display-brand.component';

describe('DisplayBrandComponent', () => {
  let component: DisplayBrandComponent;
  let fixture: ComponentFixture<DisplayBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
