import { PokemonClient } from 'pokenode-ts';
import { useCallback } from 'react';

export const useGetPokemon = () => {
  const getPokemonRequest = useCallback(async (id: number) => {
    const api = new PokemonClient();
    const { name } = await api.getPokemonById(id);

    return name;
  }, []);

  return { getPokemonRequest };
};
