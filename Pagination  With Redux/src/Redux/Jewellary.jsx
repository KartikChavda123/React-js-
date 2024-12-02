import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';


export default function Jewellary() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const Record = useSelector((state) => state.apiKey?.data || []);
  const newRecord = Record.filter((el) => el.category === 'jewelery');

  return (
    <>
      <div className="container">
        <div className="side-navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/women" className="nav-link">Women's</Link>
          <Link to="/men" className="nav-link">Men's</Link>
          <Link to="/electronic" className="nav-link">Electronic</Link>
          <Link to="/jewellary" className="nav-link active">Jewelry</Link>
        </div>

        <div className="content">
          <div className="section-title">Jewelry</div>

          <div className="item-grid">
            {newRecord &&
              newRecord.map((e, i) => (
                <div key={i} className="item-card">
                  <div className="item-image-wrapper">
                    <img src={e.image} alt={e.title} className="item-image" />
                  </div>
                  <div className="item-title">{e.title}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
