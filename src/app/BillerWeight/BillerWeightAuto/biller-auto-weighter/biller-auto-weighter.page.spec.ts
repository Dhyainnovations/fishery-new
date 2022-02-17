import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillerAutoWeighterPage } from './biller-auto-weighter.page';

describe('BillerAutoWeighterPage', () => {
  let component: BillerAutoWeighterPage;
  let fixture: ComponentFixture<BillerAutoWeighterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerAutoWeighterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillerAutoWeighterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
