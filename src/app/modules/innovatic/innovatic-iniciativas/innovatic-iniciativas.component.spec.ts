import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaticIniciativasComponent } from './innovatic-iniciativas.component';

describe('InnovaticIniciativasComponent', () => {
  let component: InnovaticIniciativasComponent;
  let fixture: ComponentFixture<InnovaticIniciativasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovaticIniciativasComponent]
    });
    fixture = TestBed.createComponent(InnovaticIniciativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
