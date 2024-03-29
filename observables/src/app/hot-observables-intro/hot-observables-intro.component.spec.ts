import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObservablesIntroComponent } from './hot-observables-intro.component';

describe('HotObservablesIntroComponent', () => {
  let component: HotObservablesIntroComponent;
  let fixture: ComponentFixture<HotObservablesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotObservablesIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotObservablesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
