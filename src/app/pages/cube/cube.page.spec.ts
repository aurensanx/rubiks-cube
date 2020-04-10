import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CubePage } from './cube.page';

describe('CubePage', () => {
  let component: CubePage;
  let fixture: ComponentFixture<CubePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
