import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import TVShowList from './tvShowsList';
import logo from '../assets/film-reel.png';
import '../styles/Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <header className="navigation">
      <div className="header-logo">
        <Link to="/">
          <FaChevronLeft onClick={handleReturn} aria-label="Go back" />
        </Link>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <TVShowList />
    </header>
  );
};

export default Navigation;
