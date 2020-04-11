import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OllPage } from './oll.page';

describe('OllPage', () => {
  let component: OllPage;
  let fixture: ComponentFixture<OllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
