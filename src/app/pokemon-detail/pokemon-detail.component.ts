import { Component, OnInit, Input } from '@angular/core';
import {Pokemon} from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService }  from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  ngOnInit(): void {
    this.getPokemon();
  }
  
  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  @Input() pokemon: Pokemon;
  
  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location) {
    
   }

   goBack(): void {
    this.location.back();
  }

}
