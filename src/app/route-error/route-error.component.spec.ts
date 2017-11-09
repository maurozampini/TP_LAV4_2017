import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteErrorComponent } from './route-error.component';

describe('RouteErrorComponent', () => {
  let component: RouteErrorComponent;
  let fixture: ComponentFixture<RouteErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
