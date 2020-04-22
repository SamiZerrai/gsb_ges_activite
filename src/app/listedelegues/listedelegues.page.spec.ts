import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListedeleguesPage } from './listedelegues.page';

describe('ListedeleguesPage', () => {
  let component: ListedeleguesPage;
  let fixture: ComponentFixture<ListedeleguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedeleguesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListedeleguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
