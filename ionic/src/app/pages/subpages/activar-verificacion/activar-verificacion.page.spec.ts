import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivarVerificacionPage } from './activar-verificacion.page';

describe('ActivarVerificacionPage', () => {
  let component: ActivarVerificacionPage;
  let fixture: ComponentFixture<ActivarVerificacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActivarVerificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
