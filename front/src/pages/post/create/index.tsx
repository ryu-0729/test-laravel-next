import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useCallback,
} from 'react';
import { NextPage } from 'next';
import { FormikConfig, useFormik } from 'formik';
import { storePostSchemas } from '@/utils/schemas';

import { useAddPost } from '@/apis/posts';

import { Button } from '@mui/material';

type Param = {
  title: string,
  body: string,
};

const Post: NextPage = () => {
  const { addPostRequest } = useAddPost();

  const onSubmitHandler = useCallback<FormikConfig<Param>['onSubmit']>(async (values) => {
    const { title, body } = values;
    const data = await addPostRequest({ title, body });
  }, [addPostRequest]);

  const {
    values, errors, touched, handleSubmit, handleChange, handleBlur,
  } = useFormik<Param>({
    initialValues: {
      title: '',
      body: '',
    },
    validationSchema: storePostSchemas().pick(['title', 'body']),
    onSubmit: onSubmitHandler,
  });

  const onSubmitFormHandler = useCallback(async (e: FormEvent<HTMLFormElement> | undefined) => {
    handleSubmit(e);
  }, [handleSubmit]);

  const onChangeInputHandler = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    handleChange(e);
  }, [handleChange]);

  const onBlurInputHandler = useCallback((e: FocusEvent<HTMLInputElement>): void => {
    handleBlur(e);
  }, [handleBlur]);

  return (
    <>
      <h4>Post登録</h4>
      <form onSubmit={onSubmitFormHandler}>
        <label htmlFor="title">title</label>
        <input
          id='title'
          type='text'
          onChange={onChangeInputHandler}
          onBlur={onBlurInputHandler}
        />
        {touched.title ? <div>{errors.title}</div> : undefined}
        <label htmlFor="body">body</label>
        <input
          id='body'
          type="text"
          onChange={onChangeInputHandler}
          onBlur={onBlurInputHandler}
        />
        {touched.body ? <div>{errors.body}</div> : undefined}
        <Button variant="contained" type='submit'>作成</Button>
      </form>
    </>
  );
};

export default Post;
