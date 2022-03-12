import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useGetPost } from '@/apis/posts';
import { useGetPokemon } from '@/apis/pokemon';
import { getQueryValue } from '@/utils/query';
import { StorePostForm } from '@/components/forms/posts/store';

import { Button } from '@mui/material';

const Post: NextPage = () => {
  const { query, push } = useRouter();
  const { getPokemonRequest } = useGetPokemon();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [pokemonName, setPokemonName] = useState<string>('');

  const postId = getQueryValue(query, 'id', '');
  const { data, error } = useGetPost(postId);

  useEffect(() => {
    if (error) push('/post');

    const getPokemonName = async () => {
      const randomNumber = Math.floor(Math.random() * 400);
      const pokemon = await getPokemonRequest(randomNumber + 1);
      setPokemonName(pokemon);
    };
    getPokemonName();
  }, [error, push, getPokemonRequest]);

  const pageTitle = useMemo(() => (
    isEdit ? '編集' : '詳細'
  ), [isEdit]);

  const onClickBackButtonHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(() => (
    push('/post')
  ), [push]);

  const onClickCancelButtonHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
    setIsEdit(false);
    push(`/post/${data?.id}`)
  }, [push, data]);

  return (
    <>
      <h2>{pageTitle}</h2>
      {!isEdit ?
        <div>
          <p>タイトル：{data?.title}</p>
          <p>投稿内容：{data?.body}</p>
          <p>作成日：{data?.created_at}</p>
          <p>ランダムポケモン：{pokemonName ?? ''}</p>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setIsEdit(true)}
          >
            編集
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClickBackButtonHandler}
          >
            一覧に戻る
          </Button>
        </div> :
        <div>
          <StorePostForm isEdit={isEdit} post={data} />
          <Button
            variant="contained"
            color="secondary"
            onClick={onClickCancelButtonHandler}
          >
            キャンセル
          </Button>
        </div>
      }
    </>
  );
};

export default Post;
