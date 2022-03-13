import { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { PokemonClient } from 'pokenode-ts';
import type { Pokemon } from 'pokenode-ts';

import { PokemonModal } from '@/components/units/random-pokemon/pokemonModal';
import { Button } from '@mui/material';
import styles from './index.module.css';

type Props = {
  pokemonData: Pokemon
};

const RandomPokemon: NextPage<Props> = ({ pokemonData }) => {
  const { push } = useRouter();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h2>何が出るかな？？？</h2>
      <div className={styles.mb20}>
        <Button
          variant='contained'
          color='success'
          onClick={() => setIsOpenModal(true)}
        >
          ポケモンを見る
        </Button>
      </div>
      <div className={styles.mb20}>
        <Button
          variant='outlined'
          color='info'
          onClick={() => push(`/`)}
        >
          TOPに戻る
        </Button>
      </div>
      <PokemonModal
        isOpen={isOpenModal}
        closeModal={setIsOpenModal}
        pokemonData={pokemonData}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemonApis = new PokemonClient();
  const pokemonId = Math.floor(Math.random() * 898) + 1;
  const pokemonData = await pokemonApis.getPokemonById(pokemonId);

  return {
    props: {
      pokemonData
    },
  };
};

export default RandomPokemon;
