import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tableform } from './tableform';

describe('Tableform', () => {
  let component: Tableform;
  let fixture: ComponentFixture<Tableform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tableform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tableform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
