import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtomicmassPage } from './atomicmass.page';

describe('AtomicmassPage', () => {
  let component: AtomicmassPage;
  let fixture: ComponentFixture<AtomicmassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicmassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
