import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronegativityPage } from './electronegativity.page';

describe('ElectronegativityPage', () => {
  let component: ElectronegativityPage;
  let fixture: ComponentFixture<ElectronegativityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronegativityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
