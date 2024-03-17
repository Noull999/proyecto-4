import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container">
        <h1 className="display-4">{title}</h1>
      </div>
    </header>
  );
};

export default Header;