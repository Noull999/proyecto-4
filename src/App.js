import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import ReservationPage from './components/ReservationPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/reserva">Reserva</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/reserva">
            <ReservationPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;