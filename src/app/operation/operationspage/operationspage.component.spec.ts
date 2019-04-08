import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationspageComponent } from './operationspage.component';

describe('OperationspageComponent', () => {
  let component: OperationspageComponent;
  let fixture: ComponentFixture<OperationspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
