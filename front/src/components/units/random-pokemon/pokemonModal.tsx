import { SetStateAction, VFC } from 'react';
import Image from 'next/image';

import type { Pokemon } from 'pokenode-ts';

import { Modal, Box, Button } from '@mui/material';
import styles from '../../../pages/random-pokemon/index.module.css';

type Props = {
  isOpen: boolean
  closeModal: (value: SetStateAction<boolean>) => void
  pokemonData: Pokemon
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '650px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const PokemonModal: VFC<Props> = ({
  isOpen,
  closeModal,
  pokemonData
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => closeModal(false)}
    >
      <Box sx={style} className={styles.textCenter}>
        {pokemonData.sprites.front_default &&
          <Image
            alt='image'
            src={pokemonData.sprites.front_default}
            width={200}
            height={200}
            objectFit='contain'
          />
        }
        {pokemonData.sprites.front_shiny &&
          <Image
            alt='image'
            src={pokemonData.sprites.front_shiny}
            width={200}
            height={200}
            objectFit='contain'
          />
        }
        <table className={styles.table}>
          <tr>
            <th className={styles.th} rowSpan={3}>基本情報</th>
          </tr>
          <tr>
            <th className={styles.th}>図鑑番号</th>
            <th className={styles.th}>名前</th>
            <th className={styles.th}>身長</th>
            <th className={styles.th}>体重</th>
          </tr>
          <tr>
            <td className={styles.td}>{`#${pokemonData.id}`}</td>
            <td className={styles.td}>{pokemonData.name}</td>
            <td className={styles.td}>{`${pokemonData.height}cm`}</td>
            <td className={styles.td}>{`${pokemonData.weight / 10}kg`}</td>
          </tr>
        </table>
        <Button
          variant='outlined'
          color='info'
          onClick={() => closeModal(false)}
        >
          閉じる
        </Button>
      </Box>
    </Modal>
  );
};
