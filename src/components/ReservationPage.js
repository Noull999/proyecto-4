import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

function ReservationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Guardar la reserva en Firebase Firestore
      await addDoc(collection(db, 'reservations'), { name, email, date, time, guests });
      alert('Reserva realizada con éxito');
      // Limpiar los campos después de guardar la reserva
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
    <div className="container">
      <h1>Reserva una mesa</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Fecha</label>
          <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Hora</label>
          <input type="time" className="form-control" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="guests" className="form-label">Número de Invitados</label>
          <input type="number" className="form-control" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default ReservationPage;