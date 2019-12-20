import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import {Location} from '@angular/common'
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  pokemons: Pokemon[] = [];
 
  constructor(private pokemonService: PokemonService, private location: Location) { }
  
  ngOnInit() {
    this.getPokemons();
  }
 
  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons.slice(0, 5);
        console.log(this.pokemons);
      });
      
  }

  goBack(): void {
    this.location.back();
  }
}
