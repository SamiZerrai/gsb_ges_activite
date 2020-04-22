import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListmedecinsPage } from './listmedecins.page';

describe('ListmedecinsPage', () => {
  let component: ListmedecinsPage;
  let fixture: ComponentFixture<ListmedecinsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmedecinsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListmedecinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
