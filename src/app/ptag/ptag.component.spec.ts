import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtagComponent } from './ptag.component';

describe('PtagComponent', () => {
  let component: PtagComponent;
  let fixture: ComponentFixture<PtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
