import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reportevent2Page } from './reportevent2.page';

describe('Reportevent2Page', () => {
  let component: Reportevent2Page;
  let fixture: ComponentFixture<Reportevent2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reportevent2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reportevent2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
