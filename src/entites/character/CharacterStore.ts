import { useCallback, useEffect, useMemo, useState } from "react";
import type { Character } from "./types";
import type { RequestOptions } from "@/shared/api/HttpClient";

export const createCharacterStore = ({
    getCharacters
  }: {
    getCharacters: (endpoint?: string, options?: Omit<RequestOptions, "body">) => Promise<Character[]>
  }) => {


  return function useCharacters() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Character[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    const fetchCharacters = useCallback(async (name: string) => {
      try {
        setLoading(true);
        setError(null);        
        const data = await getCharacters(undefined, {params: {name}});      
        setItems(data ?? []);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e?.message ?? "Network error");
          setItems([]);
        }
      } finally {
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      const t = setTimeout(() => {        
        fetchCharacters(query);
      }, 300);
      return () => clearTimeout(t);
    }, [fetchCharacters, query]);
    
    return useMemo(
      () => ({
        query,
        setQuery,
        loading,
        items,
        error,
        fetchCharacters,
      }),
      [query, setQuery, loading, items, error, fetchCharacters],
    );
}}