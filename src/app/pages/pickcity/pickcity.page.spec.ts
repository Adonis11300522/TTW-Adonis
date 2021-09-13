import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickcityPage } from './pickcity.page';

describe('PickcityPage', () => {
  let component: PickcityPage;
  let fixture: ComponentFixture<PickcityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickcityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickcityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
