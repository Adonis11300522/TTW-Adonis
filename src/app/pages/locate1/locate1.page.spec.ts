import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Locate1Page } from './locate1.page';

describe('Locate1Page', () => {
  let component: Locate1Page;
  let fixture: ComponentFixture<Locate1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Locate1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Locate1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
