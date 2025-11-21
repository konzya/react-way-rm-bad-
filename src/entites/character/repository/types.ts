
import type { RequestOptions } from "@/shared/api/HttpClient";
import type { Character } from "../types";
import type { CharacterDTO } from "@/shared/dto/CharacterDto";

export interface CharactersRepository {
  getCharacters(endpoint?: string, options?: Omit<RequestOptions, "body">): Promise<CharacterDTO>;
}

export interface FavoritesRepository {
  getFavorites: () => Record<number, Character>;
  setFavorites: (characters: Record<number, Character>) => void;  
}