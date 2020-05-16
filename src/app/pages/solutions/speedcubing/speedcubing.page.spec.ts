import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeedcubingPage } from './speedcubing.page';

describe('SpeedcubingPage', () => {
  let component: SpeedcubingPage;
  let fixture: ComponentFixture<SpeedcubingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedcubingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeedcubingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
