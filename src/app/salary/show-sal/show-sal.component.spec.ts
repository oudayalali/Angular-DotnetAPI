import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalComponent } from './show-sal.component';

describe('ShowSalComponent', () => {
  let component: ShowSalComponent;
  let fixture: ComponentFixture<ShowSalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
