import { Link } from 'react-router-dom';
import logo from '../logo/video.png';
import TVShowList from './tvShowsList';

const Navigation = () => (
  <header className="navigation">
    <Link to="/">
      <img alt="logo" src={logo} />
    </Link>
    <TVShowList />
  </header>
);

export default Navigation;
