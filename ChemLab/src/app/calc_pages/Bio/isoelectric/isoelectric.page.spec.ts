import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsoelectricPage } from './isoelectric.page';

describe('IsoelectricPage', () => {
  let component: IsoelectricPage;
  let fixture: ComponentFixture<IsoelectricPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoelectricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
