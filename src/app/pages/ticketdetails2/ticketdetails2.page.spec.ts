import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ticketdetails2Page } from './ticketdetails2.page';

describe('Ticketdetails2Page', () => {
  let component: Ticketdetails2Page;
  let fixture: ComponentFixture<Ticketdetails2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ticketdetails2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ticketdetails2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
