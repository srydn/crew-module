import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatePopUpComponent } from './certificate-pop-up.component';

describe('CertificatePopUpComponent', () => {
  let component: CertificatePopUpComponent;
  let fixture: ComponentFixture<CertificatePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
