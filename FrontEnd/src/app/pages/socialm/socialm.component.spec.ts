import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmComponent } from './socialm.component';

describe('SocialmComponent', () => {
  let component: SocialmComponent;
  let fixture: ComponentFixture<SocialmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
