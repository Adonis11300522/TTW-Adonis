import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchtabPage } from './searchtab.page';

describe('SearchtabPage', () => {
  let component: SearchtabPage;
  let fixture: ComponentFixture<SearchtabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchtabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
