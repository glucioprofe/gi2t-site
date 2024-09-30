import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaticMiembrosComponent } from './innovatic-miembros.component';

describe('InnovaticMiembrosComponent', () => {
  let component: InnovaticMiembrosComponent;
  let fixture: ComponentFixture<InnovaticMiembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovaticMiembrosComponent]
    });
    fixture = TestBed.createComponent(InnovaticMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
