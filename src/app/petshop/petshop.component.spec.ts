import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopComponent } from './petshop.component';

describe('PetshopComponent', () => {
  let component: PetshopComponent;
  let fixture: ComponentFixture<PetshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
