import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingNameComponent } from './rating-name.component';

describe('RatingNameComponent', () => {
  let component: RatingNameComponent;
  let fixture: ComponentFixture<RatingNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
