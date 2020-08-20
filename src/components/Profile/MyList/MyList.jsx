import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyFavoriteList from './MyFavoriteList/MyFavoriteList';

const MyList = () => {

const user = useSelector(state => state.user)
console.log(user)

  return (
    <div>
      <MyFavoriteList/>
   </div>
  );
}

export default MyList;
