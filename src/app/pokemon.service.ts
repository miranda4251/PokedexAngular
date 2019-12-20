import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';
import {POKEMONS} from './mock-pokemons';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  

const httpOptions = {
headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class PokemonService {
deletePokemon(pokemon: Pokemon | number): Observable<Pokemon>{
  const id= typeof pokemon === 'number' ? pokemon : pokemon.id;
  const url = `${this.pokemonUrl}/${id}`;
    
  return this.http.delete<Pokemon>(url, this.httpOptions)
}
  constructor(private messageService: MessageService,   private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    this.messageService.add(`PokemonService: fetched pokemon list`);
    return this.http.get<Pokemon[]>(this.pokemonUrl)
  }

  getPokemon(id: number): Observable<Pokemon> {
    this.messageService.add(`PokemonService: fetched pokemon list`);
    return of(POKEMONS.find(pokemon=>pokemon.id===id)); 
  }

  private log(message: string) {
    this.messageService.add(`PokemonService: ${message}`);
  }

  addPokemon (pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.pokemonUrl, pokemon, httpOptions
    );
  }

  

  private pokemonUrl = 'http://localhost:8080/treinador'; 
}
