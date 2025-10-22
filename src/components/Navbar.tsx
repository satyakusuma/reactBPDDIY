import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" className="hover:text-gray-300">
            Daftar Pengguna
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
