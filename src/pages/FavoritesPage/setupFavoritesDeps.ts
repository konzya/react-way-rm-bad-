import { FavoritesService } from "@/entites/character/FavoritesService";
import { createFavoritesStore } from "@/entites/character/FavoritesStore";
import { FavoritesStorageApi } from "@/entites/character/repository/FavoritesStorageApi";
import type { Character } from "@/types/character";


export const setupFavoritesDeps = () => {
  
  const favoritesService = new FavoritesService(new FavoritesStorageApi())
 
  const useFavorites = createFavoritesStore({
    getFavorites: () => favoritesService.getFavorites(),
    writeFavorites: (favorites: Record<number, Character>) => favoritesService.setFavorites(favorites),
   
  })

  return { useFavorites };
};