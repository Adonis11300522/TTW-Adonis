import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GooutPage } from './goout.page';

describe('GooutPage', () => {
  let component: GooutPage;
  let fixture: ComponentFixture<GooutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GooutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
