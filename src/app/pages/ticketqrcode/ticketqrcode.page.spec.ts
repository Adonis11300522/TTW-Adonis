import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TicketqrcodePage } from './ticketqrcode.page';

describe('TicketqrcodePage', () => {
  let component: TicketqrcodePage;
  let fixture: ComponentFixture<TicketqrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketqrcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketqrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
