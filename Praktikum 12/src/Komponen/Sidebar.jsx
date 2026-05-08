import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiPackage, FiFileText } from 'react-icons/fi';
import logo from '../assets/logo.jpg.jpg';   // ← pakai .jpg

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="btn btn-dark d-md-none position-fixed top-0 start-0 m-3"
        style={{ zIndex: 1050 }}
        onClick={toggleSidebar}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`bg-dark text-white vh-100 position-fixed top-0 start-0 ${
          isOpen ? 'd-block' : 'd-none d-md-block'
        }`}
        style={{ width: '250px', zIndex: 1040, transition: 'all 0.3s' }}
      >
        <div className="p-3">
          {/* Logo dengan Gambar */}
          <div className="text-center mb-4 mt-4 mt-md-0">
            <img 
              src={logo} 
              alt="Logo Pabrik Ais" 
              style={{ 
                width: '70px', 
                height: '70px', 
                objectFit: 'contain',
                marginBottom: '10px'
              }} 
            />
            <h5 className="mb-0">Pabrik Ais</h5>
            <small>Sistem Monitoring</small>
          </div>
          <hr className="bg-secondary" />

          <ul className="nav nav-pills flex-column">
            <li className="nav-item mb-2">
              <Link
                to="/"
                className="nav-link text-white d-flex align-items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FiHome /> Dashboard
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/inventori"
                className="nav-link text-white d-flex align-items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FiPackage /> Inventori
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/laporan"
                className="nav-link text-white d-flex align-items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FiFileText /> Laporan
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50"
          style={{ zIndex: 1030 }}
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;