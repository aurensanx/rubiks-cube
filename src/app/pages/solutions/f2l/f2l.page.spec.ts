import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { F2lPage } from './f2l.page';

describe('F2lPage', () => {
  let component: F2lPage;
  let fixture: ComponentFixture<F2lPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F2lPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(F2lPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
