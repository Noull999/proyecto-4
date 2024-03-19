import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>Página principal</h1>
      <p>Contenido de la página principal.</p>
      <Link to="/reserva">
        <button>Ir a la reserva</button>
      </Link>
    </div>
  );
}

export default MainPage;