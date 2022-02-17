import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillerWeightManualDashboardPage } from './biller-weight-manual-dashboard.page';

describe('BillerWeightManualDashboardPage', () => {
  let component: BillerWeightManualDashboardPage;
  let fixture: ComponentFixture<BillerWeightManualDashboardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerWeightManualDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillerWeightManualDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
