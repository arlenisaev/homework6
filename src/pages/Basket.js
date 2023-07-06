import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../redux/slices/GetProductSlice';

function Basket() {
  const { basket } = useSelector((state) => state.getProductSlice);
  const dispatch = useDispatch();
  const handleRemoveClick = (e) => {
    dispatch(removeProduct(e));
  };
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      {basket?.map((item) => (
        <div key={item._id} style={{ width: '300px' }}>
          <img src={item.picture} alt="img" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <h3>{item.count}</h3>
          <button onClick={() => handleRemoveClick(item._id)}>Удалить из корзины</button>
        </div>
      ))}
    </div>
  );
}

export default Basket;
