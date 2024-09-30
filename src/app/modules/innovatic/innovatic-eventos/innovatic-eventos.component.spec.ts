import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaticEventosComponent } from './innovatic-eventos.component';

describe('InnovaticEventosComponent', () => {
  let component: InnovaticEventosComponent;
  let fixture: ComponentFixture<InnovaticEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovaticEventosComponent]
    });
    fixture = TestBed.createComponent(InnovaticEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
