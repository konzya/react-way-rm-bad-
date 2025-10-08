import type { FavoritesRepository } from "./repository/types";
import type { Character } from "./types";

export class FavoritesService {
  #favoritesRepository: FavoritesRepository;

  constructor(favoritesRepository: FavoritesRepository) {
    this.#favoritesRepository = favoritesRepository;
  }

  getFavorites() {
    return this.#favoritesRepository.getFavorites();
  };

  setFavorites(favorites: Record<number, Character>) {
    this.#favoritesRepository.setFavorites(favorites);
  }
}