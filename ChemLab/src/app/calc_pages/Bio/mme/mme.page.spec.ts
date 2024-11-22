import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MMEPage } from './mme.page';

describe('MMEPage', () => {
  let component: MMEPage;
  let fixture: ComponentFixture<MMEPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MMEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
