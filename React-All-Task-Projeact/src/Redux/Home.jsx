import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const Record = useSelector((state) => state.apiKey.data);

  
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Watch">Watch</Link>
        <Link to="/men">Men's</Link>
        <Link to="/electronic">Electronic</Link>
        <Link to="/mensshoes">Mens Shoes</Link>
      </nav>

      <div className="container">
        {Record &&
          Record.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <div className="title">Title: {item.title}</div>
                <div className="price">Price: {item.price}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
