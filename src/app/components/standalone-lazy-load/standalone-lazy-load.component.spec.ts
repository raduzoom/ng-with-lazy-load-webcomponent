import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneLazyLoadComponent } from './standalone-lazy-load.component';

describe('StandaloneLazyLoadComponent', () => {
  let component: StandaloneLazyLoadComponent;
  let fixture: ComponentFixture<StandaloneLazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneLazyLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandaloneLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
