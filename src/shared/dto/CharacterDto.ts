import type { Character } from "@/types/character";

export interface CharacterDTO {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}