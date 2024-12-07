import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';

export default function Mens() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const Record = useSelector((state) => state.apiKey?.data || []);
  const newRecord = Record.filter((el) => el.category === "men's clothing");

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Watch">Watch</Link>
        <Link to="/men">Men's</Link>
        <Link to="/electronic">Electronic</Link>
        <Link to="/mensshoes">Mens Shoes</Link>
      </nav>

      <div className="container">
        <div className="grid">
          {newRecord &&
            newRecord.map((e, i) => (
              <div className="card" key={i}>
                <img src={e.image} alt={e.title} />
                <div className="card-content">
                  <div className="title">Title: {e.title}</div>
                  <div className="price">Price:{e.price}</div>
                  <div className="size">Size: {e.size}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
