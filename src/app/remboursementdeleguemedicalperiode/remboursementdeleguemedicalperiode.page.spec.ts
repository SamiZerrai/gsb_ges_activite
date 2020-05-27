import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemboursementdeleguemedicalperiodePage } from './remboursementdeleguemedicalperiode.page';

describe('RemboursementdeleguemedicalperiodePage', () => {
  let component: RemboursementdeleguemedicalperiodePage;
  let fixture: ComponentFixture<RemboursementdeleguemedicalperiodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemboursementdeleguemedicalperiodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemboursementdeleguemedicalperiodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
