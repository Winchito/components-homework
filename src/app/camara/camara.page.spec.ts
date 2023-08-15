import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraPage } from './camara.page';
import { IonicModule } from '@ionic/angular';

describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamaraPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
