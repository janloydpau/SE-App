import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronconfigurationPage } from './electronconfiguration.page';

describe('ElectronconfigurationPage', () => {
  let component: ElectronconfigurationPage;
  let fixture: ComponentFixture<ElectronconfigurationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronconfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
