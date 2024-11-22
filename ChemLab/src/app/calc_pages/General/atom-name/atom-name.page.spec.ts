import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtomNamePage } from './atom-name.page';

describe('AtomNamePage', () => {
  let component: AtomNamePage;
  let fixture: ComponentFixture<AtomNamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
