import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsOnePage } from './news-one.page';

describe('NewsOnePage', () => {
  let component: NewsOnePage;
  let fixture: ComponentFixture<NewsOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
