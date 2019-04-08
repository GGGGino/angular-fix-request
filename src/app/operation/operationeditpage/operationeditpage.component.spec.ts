import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationeditpageComponent } from './operationeditpage.component';

describe('OperationeditpageComponent', () => {
  let component: OperationeditpageComponent;
  let fixture: ComponentFixture<OperationeditpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationeditpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationeditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
