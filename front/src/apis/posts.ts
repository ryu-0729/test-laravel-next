import { useCallback } from "react";
import useSWR from "swr";
import { axios } from "./axios";

type AddPostRequest = {
  title: string,
  body: string,
};

type EditPostRequest = {
  id: number,
  title: string,
  body: string,
};

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

export const useAddPost = () => {
  const addPostRequest = useCallback(async (param: AddPostRequest) => {
    const { data } = await axios.post('/api/posts', param);

    return { data };
  }, []);

  return { addPostRequest };
};

export const useEditPost = () => {
  const editPostRequest = useCallback(async (param: EditPostRequest) => {
    const { id, title, body } = param;
    const { data } = await axios.put(`/api/posts/${id}`, { title, body });

    return { data };
  }, []);

  return { editPostRequest };
};

export const useGetPost = (id: number) => {
  const { data, error } = useSWR(id ? [`/api/posts/${id}`] : null,
    (url) => axios.get(url)
      .then((res) => res)
  );

  const response = data?.data;

  return {
    data: error ? undefined : response,
    error: error ? error : undefined,
  };
};
