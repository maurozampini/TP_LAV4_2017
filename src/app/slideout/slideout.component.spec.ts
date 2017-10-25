import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideoutComponent } from './slideout.component';

describe('SlideoutComponent', () => {
  let component: SlideoutComponent;
  let fixture: ComponentFixture<SlideoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
