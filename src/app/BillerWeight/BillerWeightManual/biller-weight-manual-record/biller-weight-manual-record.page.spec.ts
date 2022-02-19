import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillerWeightManualRecordPage } from './biller-weight-manual-record.page';

describe('BillerWeightManualRecordPage', () => {
  let component: BillerWeightManualRecordPage;
  let fixture: ComponentFixture<BillerWeightManualRecordPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerWeightManualRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillerWeightManualRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
