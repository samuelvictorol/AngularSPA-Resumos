import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCarroComponent } from './busca-carro.component';

describe('BuscaCarroComponent', () => {
  let component: BuscaCarroComponent;
  let fixture: ComponentFixture<BuscaCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
