import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListevisitePage } from './listevisite.page';

describe('ListevisitePage', () => {
  let component: ListevisitePage;
  let fixture: ComponentFixture<ListevisitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListevisitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListevisitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
