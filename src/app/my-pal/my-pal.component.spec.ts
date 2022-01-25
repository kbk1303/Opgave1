import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPalComponent } from './my-pal.component';

describe('MyPalComponent', () => {
  let component: MyPalComponent;
  let fixture: ComponentFixture<MyPalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
