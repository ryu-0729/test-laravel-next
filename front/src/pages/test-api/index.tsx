import { NextPage } from 'next';
import useSWR, { Fetcher } from 'swr';
import { axios } from '@/apis/axios';

const fetcher: Fetcher<string> = (url: string) => axios.get(url).then((res: any) => res.data)

const TestApi: NextPage = () => {
  const { data, error } = useSWR(
    '/api/hello',
    fetcher
  );

  return (
    <div>
      <h1>こんにちは</h1>
      <p>{data}</p>
    </div>
  );
};

export default TestApi;
