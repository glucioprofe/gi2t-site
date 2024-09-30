import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaticInicioComponent } from './innovatic-inicio.component';

describe('InnovaticInicioComponent', () => {
  let component: InnovaticInicioComponent;
  let fixture: ComponentFixture<InnovaticInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovaticInicioComponent]
    });
    fixture = TestBed.createComponent(InnovaticInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
