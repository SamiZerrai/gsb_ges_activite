import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemboursementdeleguemedicalPage } from './remboursementdeleguemedical.page';

describe('RemboursementdeleguemedicalPage', () => {
  let component: RemboursementdeleguemedicalPage;
  let fixture: ComponentFixture<RemboursementdeleguemedicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemboursementdeleguemedicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemboursementdeleguemedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
