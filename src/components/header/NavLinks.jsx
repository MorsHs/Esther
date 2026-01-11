import { NavLink } from "react-router-dom";

const NavLinks = ({ onClick }) => {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-green-600 border-b-2 border-green-400 pb-1"
        : "text-gray-600 hover:text-gray-900"
    }`;

  return (  
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6">
      <NavLink to="/upload" onClick={onClick} className={linkClass}>
        Upload
      </NavLink>

      <NavLink to="/records" onClick={onClick} className={linkClass}>
        Records
      </NavLink>
    </nav>
  );
};

export default NavLinks;
