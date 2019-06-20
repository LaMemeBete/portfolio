import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JblComponent } from './jbl.component';

describe('JblComponent', () => {
  let component: JblComponent;
  let fixture: ComponentFixture<JblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
