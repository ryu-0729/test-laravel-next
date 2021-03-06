import { PokemonClient } from 'pokenode-ts';
import { useCallback } from 'react';

export const useGetPokemon = () => {
  const getPokemonRequest = useCallback(async (id: number) => {
    const api = new PokemonClient();
    const data = await api.getPokemonById(id);

    return data;
  }, []);

  return { getPokemonRequest };
};
