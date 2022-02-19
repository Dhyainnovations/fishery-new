import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CenterWeightAutoRecordPage } from './center-weight-auto-record.page';

describe('CenterWeightAutoRecordPage', () => {
  let component: CenterWeightAutoRecordPage;
  let fixture: ComponentFixture<CenterWeightAutoRecordPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterWeightAutoRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CenterWeightAutoRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
