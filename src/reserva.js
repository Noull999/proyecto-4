import React, { useState } from 'react';

const Reserva = ({ onReserve }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { name, email, date, time, guests };
    onReserve(reservation);
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests('');
  };

  return (
    <section id="reserva" className="py-5">
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
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="Fecha"
              placeholder="Fecha"
              value={email}
              onChange={(e) => setDate(e.target.value)}
            />