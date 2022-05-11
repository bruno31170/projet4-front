import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PisteVeloComponent } from './piste-velo.component';

describe('PisteVeloComponent', () => {
  let component: PisteVeloComponent;
  let fixture: ComponentFixture<PisteVeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisteVeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisteVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
