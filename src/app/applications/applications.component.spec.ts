import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationComponent } from './applications.component';

describe('ApplicationsComponent', () => {
  let component: ApplicationComponent;
  let fixture: ComponentFixture<ApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationComponent]
    });
    fixture = TestBed.createComponent(ApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
