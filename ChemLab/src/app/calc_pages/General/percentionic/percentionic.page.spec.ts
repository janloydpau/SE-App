import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercentionicPage } from './percentionic.page';

describe('PercentionicPage', () => {
  let component: PercentionicPage;
  let fixture: ComponentFixture<PercentionicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
