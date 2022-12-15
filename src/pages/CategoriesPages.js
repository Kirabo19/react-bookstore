import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPages = () => {
  const dispatch = useDispatch();

  const checkCategoriesStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <h3>This is the categories page</h3>
      <button type="button" onClick={checkCategoriesStatus}>Check status</button>
    </div>
  );
};

export default CategoriesPages;
