import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDetailPopUpComponent } from './certificate-detail-pop-up.component';

describe('CertificateDetailPopUpComponent', () => {
  let component: CertificateDetailPopUpComponent;
  let fixture: ComponentFixture<CertificateDetailPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateDetailPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateDetailPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
