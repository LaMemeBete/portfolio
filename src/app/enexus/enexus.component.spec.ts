import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnexusComponent } from './enexus.component';

describe('EnexusComponent', () => {
  let component: EnexusComponent;
  let fixture: ComponentFixture<EnexusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnexusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnexusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
