import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import TVShowList from './tvShowsList';
import '../styles/Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <header className="navigation">
      <Link to="/">
        <FaChevronLeft onClick={handleReturn} aria-label="Go back" />
      </Link>
      <TVShowList />
    </header>
  );
};

export default Navigation;
