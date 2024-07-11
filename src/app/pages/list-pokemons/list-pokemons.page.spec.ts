import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPokemonsPage } from './list-pokemons.page';

describe('ListPokemonsPage', () => {
  let component: ListPokemonsPage;
  let fixture: ComponentFixture<ListPokemonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
