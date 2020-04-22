import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailmedecinPage } from './detailmedecin.page';

describe('DetailmedecinPage', () => {
  let component: DetailmedecinPage;
  let fixture: ComponentFixture<DetailmedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmedecinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailmedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
