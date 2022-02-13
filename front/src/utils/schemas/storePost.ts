import * as yup from 'yup';

const storePostSchemas = () => {
  const titleRule = yup.string()
    .required('タイトルは必須です');
  const bodyRule = yup.string()
    .required('投稿内容は必須です');

  return yup.object().shape({
    title: titleRule,
    body: bodyRule,
  });
};

export default storePostSchemas;
