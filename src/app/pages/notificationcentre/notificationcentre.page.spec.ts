import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationcentrePage } from './notificationcentre.page';

describe('NotificationcentrePage', () => {
  let component: NotificationcentrePage;
  let fixture: ComponentFixture<NotificationcentrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationcentrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationcentrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
