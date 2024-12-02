import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const Record = useSelector((state) => state.apiKey?.data || []);
  const newRecord1 = Record.filter((el) => el.category === "women's clothing");
  const newRecord2 = Record.filter((el) => el.category === "men's clothing");
  const newRecord3 = Record.filter((el) => el.category === 'electronics');
  const newRecord4 = Record.filter((el) => el.category === 'jewelery');

  return (
    <div className="container">
      <div className="side-navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/women" className="nav-link">Women's</Link>
        <Link to="/men" className="nav-link">Men's</Link>
        <Link to="/electronic" className="nav-link">Electronic</Link>
        <Link to="/jewellary" className="nav-link">Jewelry</Link>
      </div>

      <div className="content">
        <Section title="Women's Clothing" items={newRecord1} />
        <Section title="Men's Clothing" items={newRecord2} />
        <Section title="Electronics" items={newRecord3} />
        <Section title="Jewelry" items={newRecord4} />
      </div>
    </div>
  );
}

const Section = ({ title, items }) => {
  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="item-grid">
        {items &&
          items.map((item, index) => (
            <div key={index} className="item-card">
              <div className="item-image-wrapper">
                <img className="item-image" src={item.image} alt={item.title} />
              </div>
              <div className="item-title">{item.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
