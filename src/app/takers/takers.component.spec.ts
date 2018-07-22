import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakersComponent } from './takers.component';

describe('TakersComponent', () => {
  let component: TakersComponent;
  let fixture: ComponentFixture<TakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
