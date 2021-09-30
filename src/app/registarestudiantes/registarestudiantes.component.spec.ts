import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarestudiantesComponent } from './registarestudiantes.component';

describe('RegistarestudiantesComponent', () => {
  let component: RegistarestudiantesComponent;
  let fixture: ComponentFixture<RegistarestudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarestudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
