import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaticComponent } from './innovatic.component';

describe('InnovaticComponent', () => {
  let component: InnovaticComponent;
  let fixture: ComponentFixture<InnovaticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovaticComponent]
    });
    fixture = TestBed.createComponent(InnovaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
