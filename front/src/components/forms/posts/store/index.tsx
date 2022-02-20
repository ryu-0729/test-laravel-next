import {
  VFC,
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useCallback,
} from 'react';
import { useRouter } from 'next/router';
import { FormikConfig, useFormik } from 'formik';
import { storePostSchemas } from '@/utils/schemas';

import { useAddPost } from '@/apis/posts';

import { Button } from '@mui/material';

type Props = {
  isEdit?: boolean,
  post?: any
};

type Param = {
  title: string,
  body: string,
};

export const StorePostForm: VFC<Props> = ({
  isEdit = false,
  post
}) => {
  const { push } = useRouter();
  const { addPostRequest } = useAddPost();

  const onSubmitHandler = useCallback<FormikConfig<Param>['onSubmit']>(async (values) => {
    const { title, body } = values;
    const data = await addPostRequest({ title, body });

    if (data && !('error' in data)) push('/post');
  }, [addPostRequest, push]);

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
    <form onSubmit={onSubmitFormHandler}>
      <div>
        <label htmlFor="title">title</label>
        <input
          id='title'
          type='text'
          onChange={onChangeInputHandler}
          onBlur={onBlurInputHandler}
          value={values.title}
        />
        {touched.title ? <div>{errors.title}</div> : undefined}
      </div>
      <div>
        <label htmlFor="body">body</label>
        <input
          id='body'
          type="text"
          onChange={onChangeInputHandler}
          onBlur={onBlurInputHandler}
          value={values.body}
        />
        {touched.body ? <div>{errors.body}</div> : undefined}
      </div>
      <Button variant="contained" type='submit'>作成</Button>
    </form>
  );
}
