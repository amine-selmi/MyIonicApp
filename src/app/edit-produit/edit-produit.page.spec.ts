import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProduitPage } from './edit-produit.page';

describe('EditProduitPage', () => {
  let component: EditProduitPage;
  let fixture: ComponentFixture<EditProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProduitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
