import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPopUpComponent } from './crew-pop-up.component';

describe('CrewPopUpComponent', () => {
  let component: CrewPopUpComponent;
  let fixture: ComponentFixture<CrewPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
