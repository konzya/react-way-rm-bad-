import { CharacterService } from "@/entites/character/CharacterService";
import { createCharacterStore } from "@/entites/character/CharacterStore";
import { FavoritesService } from "@/entites/character/FavoritesService";
import { createFavoritesStore } from "@/entites/character/FavoritesStore";
import { CharacterApi } from "@/entites/character/repository/CharacterApi";
import { FavoritesStorageApi } from "@/entites/character/repository/FavoritesStorageApi";
import type { RequestOptions } from "@/shared/api/HttpClient";
import type { Character } from "@/types/character";


export const setupCharactersDeps = () => {
  const characterService = new CharacterService(new CharacterApi())
  const favoritesService = new FavoritesService(new FavoritesStorageApi())
 
 
  const useCharacters = createCharacterStore({
    getCharacters: (endpoint?: string, options?: Omit<RequestOptions, "body">) => characterService.getCharacters(endpoint, options)
  });

  const useFavorites = createFavoritesStore({
    getFavorites: () => favoritesService.getFavorites(),
    writeFavorites: (favorites: Record<number, Character>) => favoritesService.setFavorites(favorites),
   
  })

  return { useCharacters, useFavorites };
};