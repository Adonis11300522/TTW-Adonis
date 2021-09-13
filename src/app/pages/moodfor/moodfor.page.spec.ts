import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoodforPage } from './moodfor.page';

describe('MoodforPage', () => {
  let component: MoodforPage;
  let fixture: ComponentFixture<MoodforPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodforPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoodforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
