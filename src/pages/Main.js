import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/slices/GetProductSlice';

function Main() {
  const { data } = useSelector((state) => state.getProductSlice);
  const dispatch = useDispatch();
  const handleAddClick = (e) => {
    dispatch(addProduct(e));
  };
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      {data?.map((item) => (
        <div key={item._id} style={{ width: '300px' }}>
          <img src={item.picture} alt="img" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <button onClick={() => handleAddClick(item)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
}

export default Main;
