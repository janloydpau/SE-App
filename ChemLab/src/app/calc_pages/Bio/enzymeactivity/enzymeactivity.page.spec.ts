import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnzymeactivityPage } from './enzymeactivity.page';

describe('EnzymeactivityPage', () => {
  let component: EnzymeactivityPage;
  let fixture: ComponentFixture<EnzymeactivityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnzymeactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
