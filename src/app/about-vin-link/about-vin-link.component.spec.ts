import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVinLinkComponent } from './about-vin-link.component';

describe('AboutVinLinkComponent', () => {
  let component: AboutVinLinkComponent;
  let fixture: ComponentFixture<AboutVinLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutVinLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutVinLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
