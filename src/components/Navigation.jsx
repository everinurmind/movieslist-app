import { Link } from 'react-router-dom';
import logo from '../logo/video.png';

const Navigation = () => (
  <header className="navigation">
    <Link to="/">
      <img alt="logo" src={logo} />
    </Link>
  </header>
);

export default Navigation;
