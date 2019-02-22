import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdialogComponent } from './requestdialog.component';

describe('RequestdialogComponent', () => {
  let component: RequestdialogComponent;
  let fixture: ComponentFixture<RequestdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
