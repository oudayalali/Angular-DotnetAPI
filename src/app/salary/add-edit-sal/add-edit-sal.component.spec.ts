import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSalComponent } from './add-edit-sal.component';

describe('AddEditSalComponent', () => {
  let component: AddEditSalComponent;
  let fixture: ComponentFixture<AddEditSalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
