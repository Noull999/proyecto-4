import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './styles.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'reservations'), { name, email, date, time, guests });
      alert('Reserva realizada con éxito');
      setName('');
      setEmail('');
      setDate('');
      setTime('');
      setGuests('');
    } catch (error) {
      console.error('Error al realizar la reserva: ', error);
      alert('Error al realizar la reserva, por favor inténtalo de nuevo');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-light py-3">
        <div className="container">
          <h1 className="text-center mb-0">Tu restaurante</h1>
        </div>
      </header>

      <section id="reserva" className="py-5 flex-grow-1">
        <div className="container">
          <h2 className="text-center mb-5">Reserva una mesa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Fecha</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Hora</label>
              <input
                type="time"
                className="form-control"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Número de Invitados</label>
              <input
                type="number"
                className="form-control"
                id="guests"
                placeholder="Número de Invitados"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </section>
      <footer className="bg-dark text-light py-3">
        <div className="container">
          <p className="text-center mb-0">© {new Date().getFullYear()} Tu restaurante. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
