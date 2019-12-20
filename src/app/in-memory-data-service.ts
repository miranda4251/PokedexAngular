import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = [
        { id: 11, name: 'Pikachu' },
        { id: 12, name: 'Eevee' },
        { id: 13, name: 'Sunkern' },
        { id: 14, name: 'Charmander' },
        { id: 15, name: 'Squartle' },
        { id: 16, name: 'Bulbassauro' },
        { id: 17, name: 'Mew' },
        { id: 18, name: 'Geodude' },
        { id: 19, name: 'Magikarp' },
        { id: 20, name: 'Suicune' }
    ];
    return {pokemons};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1 : 11;
  }
}
