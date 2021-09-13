import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindfollowingPage } from './findfollowing.page';

describe('FindfollowingPage', () => {
  let component: FindfollowingPage;
  let fixture: ComponentFixture<FindfollowingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindfollowingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindfollowingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
