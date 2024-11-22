import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentcompositionPage } from './percentcomposition.page';

describe('PercentcompositionPage', () => {
  let component: PercentcompositionPage;
  let fixture: ComponentFixture<PercentcompositionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentcompositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
