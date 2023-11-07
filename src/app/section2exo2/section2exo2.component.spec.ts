import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2exo2Component } from './section2exo2.component';

describe('Section2exo2Component', () => {
  let component: Section2exo2Component;
  let fixture: ComponentFixture<Section2exo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section2exo2Component]
    });
    fixture = TestBed.createComponent(Section2exo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
