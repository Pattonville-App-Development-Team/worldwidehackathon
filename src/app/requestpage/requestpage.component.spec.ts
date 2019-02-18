import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestpageComponent } from './requestpage.component';

describe('RequestpageComponent', () => {
  let component: RequestpageComponent;
  let fixture: ComponentFixture<RequestpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
