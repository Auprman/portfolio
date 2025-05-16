import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMobileStickyComponent } from './navbar-mobile-sticky.component';

describe('NavbarMobileStickyComponent', () => {
  let component: NavbarMobileStickyComponent;
  let fixture: ComponentFixture<NavbarMobileStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMobileStickyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMobileStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
