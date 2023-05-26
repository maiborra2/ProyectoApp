import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumoAnualPage } from './consumo-anual.page';

describe('ConsumoAnualPage', () => {
  let component: ConsumoAnualPage;
  let fixture: ComponentFixture<ConsumoAnualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsumoAnualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
