import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Memuat detail item...</div>;
  }

  if (!item || !item.id) {
    return (
      <div className="text-center mt-5">
        <h2>Item tidak ditemukan</h2>
        <Link to="/inventori" className="btn btn-primary">Kembali ke Inventori</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Detail Item Inventori</h1>
      <Link to="/inventori" className="btn btn-secondary mb-3">← Kembali ke Inventori</Link>
      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ID Item: {item.id}</h5>
          <table className="table">
            <tbody>
              <tr>
                <th style={{ width: '150px' }}>Nama Bahan</th>
                <td>{item.title}</td>
              </tr>
              <tr>
                <th>Deskripsi</th>
                <td>{item.body}</td>
              </tr>
              <tr>
                <th>Status Supplier</th>
                <td><span className="badge bg-success">Available</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;