import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaildeleguePage } from './detaildelegue.page';

describe('DetaildeleguePage', () => {
  let component: DetaildeleguePage;
  let fixture: ComponentFixture<DetaildeleguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildeleguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaildeleguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
