import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsMaterialComponent } from './faqs-material.component';

describe('FaqsMaterialComponent', () => {
  let component: FaqsMaterialComponent;
  let fixture: ComponentFixture<FaqsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
