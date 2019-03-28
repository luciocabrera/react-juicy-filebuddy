import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        FileBuddy
      </Link>
    </nav>
  );
}

export default NavBar;
