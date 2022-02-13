import useSWR from "swr";
import { axios } from "./axios";

export const usePostList = () => {
  const { data, error } = useSWR(
    '/api/posts',
    (url) => axios.get(url)
      .then((res) => res)
  );

  const response = data;

  return {
    data: error ? undefined : response?.data,
    error: error ? error : undefined,
  };
};
