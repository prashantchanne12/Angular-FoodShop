import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDishHomeComponent } from './edit-dish-home.component';

describe('EditDishHomeComponent', () => {
  let component: EditDishHomeComponent;
  let fixture: ComponentFixture<EditDishHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDishHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDishHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
