import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversenameComponent } from './reversename.component';

describe('ReversenameComponent', () => {
  let component: ReversenameComponent;
  let fixture: ComponentFixture<ReversenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
