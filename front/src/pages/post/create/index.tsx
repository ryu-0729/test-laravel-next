import { NextPage } from 'next';
import Link from 'next/link';

import { StorePostForm } from '@/components/forms/posts/store';

const Post: NextPage = () => {
  return (
    <>
      <h4>Post登録</h4>
      <Link href='/post'>
        <a>Post一覧へ</a>
      </Link>
      <StorePostForm />
    </>
  );
};

export default Post;
