import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 5));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5" style={{ marginLeft: '250px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Memuat data...</span>
        </div>
        <p>Memuat data inventori...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4" style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
      <h1>Data Inventori Bahan Baku</h1>
      <Link to="/" className="btn btn-secondary mb-3">Kembali ke Dashboard</Link>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID Item</th>
            <th>Nama Bahan</th>
            <th>Status Supplier</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td><span className="badge bg-success">Available</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventori;