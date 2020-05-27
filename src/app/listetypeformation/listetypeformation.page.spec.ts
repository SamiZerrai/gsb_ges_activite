import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListetypeformationPage } from './listetypeformation.page';

describe('ListetypeformationPage', () => {
  let component: ListetypeformationPage;
  let fixture: ComponentFixture<ListetypeformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetypeformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListetypeformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
