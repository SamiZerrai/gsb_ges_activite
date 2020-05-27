import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListetypecadeauxPage } from './listetypecadeaux.page';

describe('ListetypecadeauxPage', () => {
  let component: ListetypecadeauxPage;
  let fixture: ComponentFixture<ListetypecadeauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetypecadeauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListetypecadeauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
