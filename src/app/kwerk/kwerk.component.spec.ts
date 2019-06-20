import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KwerkComponent } from './kwerk.component';

describe('KwerkComponent', () => {
  let component: KwerkComponent;
  let fixture: ComponentFixture<KwerkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KwerkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KwerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
