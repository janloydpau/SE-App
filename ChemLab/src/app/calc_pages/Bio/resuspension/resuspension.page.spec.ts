import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResuspensionPage } from './resuspension.page';

describe('ResuspensionPage', () => {
  let component: ResuspensionPage;
  let fixture: ComponentFixture<ResuspensionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuspensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
