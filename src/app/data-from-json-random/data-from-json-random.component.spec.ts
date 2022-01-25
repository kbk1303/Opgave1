import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFromJsonRandomComponent } from './data-from-json-random.component';

describe('DataFromJsonRandomComponent', () => {
  let component: DataFromJsonRandomComponent;
  let fixture: ComponentFixture<DataFromJsonRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFromJsonRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFromJsonRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
