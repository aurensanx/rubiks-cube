import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CubeComponent } from './cube.component';

describe('CubeComponent', () => {
  let component: CubeComponent;
  let fixture: ComponentFixture<CubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
