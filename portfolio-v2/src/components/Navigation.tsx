import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="floating-nav">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} title="Home">
            <FiHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} title="About">
            <FiUser />
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} title="Portfolio">
            <FiBriefcase />
          </NavLink>
        </li>
        <li>
          <a href="mailto:contact@awais-nasir.com" className="nav-link" title="Contact">
            <FiMail />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
