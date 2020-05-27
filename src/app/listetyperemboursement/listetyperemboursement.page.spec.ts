import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListetyperemboursementPage } from './listetyperemboursement.page';

describe('ListetyperemboursementPage', () => {
  let component: ListetyperemboursementPage;
  let fixture: ComponentFixture<ListetyperemboursementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetyperemboursementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListetyperemboursementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
