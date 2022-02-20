import { NextPage } from 'next';
import { usePostList } from '@/apis/posts';
import Link from 'next/link';

type Post = {
  id?: number,
  title?: string,
  body?: string,
  created_at?: string,
  updated_at?: string,
};

const Post: NextPage = () => {
  const { data: postList } = usePostList();

  return (
    <>
      <Link href='/'>
        <a>Topページ</a>
      </Link>
      <Link href='/post/create'>
        <a>Post作成ページ</a>
      </Link>
      {postList?.map((post: Post) => {
        return (
          <div key={post?.id}>
            <li>
              <Link href={`/post/${post?.id}`}>
                <a>{post?.title}</a>
              </Link>
            </li>
            <li>{post?.body}</li>
            <li>{post?.created_at}</li>
          </div>
        );
      })}
    </>
  );
};

export default Post;
