import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-outer">
      <nav>
        <Link to="/design">Design</Link>
        <Link to="/development">Development</Link>
        <Link to="/marketing">Marketing</Link>
      </nav>
    </div>
  );
};

export default Navbar;
