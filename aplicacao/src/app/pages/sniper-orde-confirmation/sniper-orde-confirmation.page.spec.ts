import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SniperOrdeConfirmationPage } from './sniper-orde-confirmation.page';

describe('SniperOrdeConfirmationPage', () => {
  let component: SniperOrdeConfirmationPage;
  let fixture: ComponentFixture<SniperOrdeConfirmationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SniperOrdeConfirmationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SniperOrdeConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
