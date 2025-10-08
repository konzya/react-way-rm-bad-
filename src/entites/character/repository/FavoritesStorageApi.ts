import type {  FavoritesRepository } from "./types";
import type { Character } from "../types";

export class FavoritesStorageApi implements FavoritesRepository {
  LS_KEY = "favorites_characters_v1";

  public getFavorites() {
    let favorites: Record<number, Character> = {};
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (raw) favorites = JSON.parse(raw);
    } catch (e) {
      console.error("Failed to load favorites", e);
    }

    return favorites;
  };

  setFavorites(characters: Record<number, Character>) {
    try {
        localStorage.setItem(this.LS_KEY, JSON.stringify(characters));
      } catch (e) {
        console.error("Failed to set favorites", e);
      }  
  }

  clearFavorites() {
   this.setFavorites({}); 
  };

  addFavorite(character: Character) {
    const favorites = this.getFavorites();
    favorites[character.id] = character;
    this.setFavorites(favorites);
  };

  deleteFavorite(character: Character) {
    const favorites = this.getFavorites();
    delete favorites[character.id];
    this.setFavorites(favorites);
  };
}