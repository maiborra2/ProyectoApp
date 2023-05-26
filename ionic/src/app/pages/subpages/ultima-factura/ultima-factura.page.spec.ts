import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltimaFacturaPage } from './ultima-factura.page';

describe('UltimaFacturaPage', () => {
  let component: UltimaFacturaPage;
  let fixture: ComponentFixture<UltimaFacturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UltimaFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
