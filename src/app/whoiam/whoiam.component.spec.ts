import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoiamComponent } from './whoiam.component';

describe('WhoiamComponent', () => {
  let component: WhoiamComponent;
  let fixture: ComponentFixture<WhoiamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoiamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoiamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
