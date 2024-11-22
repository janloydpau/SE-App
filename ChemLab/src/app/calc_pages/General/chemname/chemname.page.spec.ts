import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChemnamePage } from './chemname.page';

describe('ChemnamePage', () => {
  let component: ChemnamePage;
  let fixture: ComponentFixture<ChemnamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
