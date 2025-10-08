import { SearchBar } from "@/pages/components/SearchBar";
import { CharacterList } from "@/pages/components/CharacterList";
import { setupCharactersDeps } from "./setupCharacterDeps";

const {useCharacters, useFavorites} = setupCharactersDeps();

export function CharactersPage() {
  const { query, setQuery, loading, items, error } = useCharacters();
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="p-4">
      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} loading={loading} />
      </div>

      {error && <div className="text-red-600">Error: {error}</div>}

      <CharacterList
        items={items}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
