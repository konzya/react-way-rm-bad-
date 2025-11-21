import { httpClient, type RequestOptions } from "@/shared/api/HttpClient";
import type { CharactersRepository } from "./types";
import type { CharacterDTO } from "@/shared/dto/CharacterDto";

export class CharacterApi implements CharactersRepository {
  ENDPOINT = "character";

  async getCharacters(endpoint: string, options: Omit<RequestOptions, "body"> = {}) {
    return await httpClient.get<CharacterDTO>(endpoint || this.ENDPOINT, options);
  }
}