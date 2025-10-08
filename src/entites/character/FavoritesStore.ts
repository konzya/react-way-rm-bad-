import { useCallback, useEffect, useState } from "react";
import type { Character } from "./types";

export const createFavoritesStore = ({
    getFavorites,
    writeFavorites
  }: {
    getFavorites: () => Record<number, Character>;
    writeFavorites: (characters: Record<number, Character>) => void;  
  }) => {


  return function useFavorites() {
    const [favorites, setFavorites] = useState<Record<number, Character>>(getFavorites());
  
    useEffect(() => {
      writeFavorites(favorites);
    }, [favorites]);
  
    const isFavorite = useCallback(
      (id: number) => Boolean(favorites[id]),
      [favorites],
    );
  
    const toggleFavorite = useCallback((char: Character) => {
      setFavorites((prev) => {
        const next = { ...prev };
        if (next[char.id]) delete next[char.id];
        else next[char.id] = char;
        return next;
      });
    }, []);
  
    const clearFavorites = useCallback(() => setFavorites({}), []);
  
    const list = Object.values(favorites);
  
    return { favorites, list, isFavorite, toggleFavorite, clearFavorites };
  }}