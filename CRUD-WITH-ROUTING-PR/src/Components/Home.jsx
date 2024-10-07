import React from 'react';
import { Link } from 'react-router-dom';


export default function Home({ deta }) {
  return (
    <div className="home-container">
      <header className="header">
        <h1>CRUD WITH ROUTING PR</h1>
        <nav className="nav-links">
          <Link className="nav-link" to={"/create"}>Create</Link>
          <Link className="nav-link" to={"/delete"}>Delete</Link>
          <Link className="nav-link" to={"/update"}>Update</Link>
        </nav>
      </header>

      <section className="content">
        <h2>Records</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {deta && deta.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
