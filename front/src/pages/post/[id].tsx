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
import { getQueryValue } from '@/utils/query';
import { StorePostForm } from '@/components/forms/posts/store';

import { Button } from '@mui/material';

const Post: NextPage = () => {
  const { query, push } = useRouter();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const postId = getQueryValue(query, 'id', '');
  const { data, error } = useGetPost(postId);

  useEffect(() => {
    if (error) push('/post');
  }, [error, push]);

  const pageTitle = useMemo(() => (
    isEdit ? '編集' : '詳細'
  ), [isEdit]);

  const onClickBackButtonHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(() => (
    push('/post')
  ), [push]);

  return (
    <>
      {!isEdit ?
        <div>
          <h2>{pageTitle}</h2>
          <p>タイトル：{data?.title}</p>
          <p>投稿内容：{data?.body}</p>
          <p>作成日：{data?.created_at}</p>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setIsEdit(true)}
          >
            編集
          </Button>
        </div> :
        <StorePostForm isEdit={isEdit} post={data} />
      }
      <Button
        variant="contained"
        color="secondary"
        onClick={onClickBackButtonHandler}
      >
        一覧に戻る
      </Button>
    </>
  );
};

export default Post;
