import type { RequestOptions } from "@/shared/api/HttpClient";
import type { CharactersRepository } from "./repository/types";
import type { Character } from "./types";

export class CharacterService {
  #characterRepository: CharactersRepository;

  constructor(characterRepository: CharactersRepository) {
    this.#characterRepository = characterRepository
  }

  async getCharacters(endpoint?: string, options?: Omit<RequestOptions, "body">): Promise<Character[]> {
    const response = await this.#characterRepository.getCharacters(endpoint, options);

    return response.results;
  }
}