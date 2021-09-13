import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchresultPage } from './searchresult.page';

describe('SearchresultPage', () => {
  let component: SearchresultPage;
  let fixture: ComponentFixture<SearchresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
