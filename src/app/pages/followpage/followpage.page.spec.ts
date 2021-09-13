import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowpagePage } from './followpage.page';

describe('FollowpagePage', () => {
  let component: FollowpagePage;
  let fixture: ComponentFixture<FollowpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
