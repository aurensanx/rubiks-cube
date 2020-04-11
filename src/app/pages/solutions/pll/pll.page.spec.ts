import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PllPage } from './pll.page';

describe('PllPage', () => {
  let component: PllPage;
  let fixture: ComponentFixture<PllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
