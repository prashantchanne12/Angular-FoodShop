import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDishHomeComponent } from './add-dish-home.component';

describe('AddDishHomeComponent', () => {
  let component: AddDishHomeComponent;
  let fixture: ComponentFixture<AddDishHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDishHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDishHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
