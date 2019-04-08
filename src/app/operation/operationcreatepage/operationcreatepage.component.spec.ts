import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationcreatepageComponent } from './operationcreatepage.component';

describe('OperationcreatepageComponent', () => {
  let component: OperationcreatepageComponent;
  let fixture: ComponentFixture<OperationcreatepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationcreatepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationcreatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
