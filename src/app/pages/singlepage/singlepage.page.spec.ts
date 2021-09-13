import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglepagePage } from './singlepage.page';

describe('SinglepagePage', () => {
  let component: SinglepagePage;
  let fixture: ComponentFixture<SinglepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
