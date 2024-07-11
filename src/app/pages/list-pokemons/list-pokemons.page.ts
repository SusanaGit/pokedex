import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListPokemonsPage implements OnInit {

  public pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.morePokemon();
  }

  morePokemon() {
    const promise = this.pokemonService.getPokemons();

    if (promise) {
      promise.then((result: Pokemon[]) => {
        console.log(result);
        this.pokemons = this.pokemons.concat(result);
        console.log(this.pokemons);
      })
    }
  }

}
