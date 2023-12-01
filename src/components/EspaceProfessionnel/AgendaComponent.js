import React, { useState } from 'react';
import  './AgendaComponent.css';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';


const AgendaComponent = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (day, debut_heure, fin_heure) => {
    const newEvent = {
      day,
      debut_heure,
      fin_heure,
    };

    setEvents([...events, newEvent]);

  axios.post('http://localhost:8000/api/disponibilite/insert', newEvent)
  .then(response => {
    console.log('Événement ajouté avec succès :', response.data);
  })
  .catch(error => {
    console.error('Erreur lors de l\'ajout de l\'événement:', error);
  });

  };

  // Fonction pour gérer le clic sur le bouton d'édition
  const handleEditClick = (index) => {
    // Logique pour l'édition
    console.log(`Modifier l'élément à l'index ${index}`);
  };

  // Fonction pour gérer le clic sur le bouton de suppression
  const handleDeleteClick = (index) => {
    // Logique pour la suppression
    console.log(`Supprimer l'élément à l'index ${index}`);
  };

  // ...

  return (
    <div className="agenda-container">
      <h1 className="agenda-title">Agenda</h1>
      <ul className="agenda-list">
        {events.map((event, index) => (
          <li key={index}>
            Date: {event.day}, Heure de début: {event.debut_heure}, Heure de fin: {event.fin_heure}
          </li>
        ))}
      </ul>
      {/* Composant pour ajouter un nouvel événement */}
      <AddEventForm addEvent={addEvent} />
    </div>
  );
};

// Composant pour le formulaire d'ajout d'événement
const AddEventForm = ({ addEvent, handleEditClick, handleDeleteClick }) => {
    // ...
  const [availabilities, setAvailabilities] = useState([]);
  const [day, setday] = useState('');
  const [debut_heure, setdebut_heure] = useState('');
  const [fin_heure, setfin_heure] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(day, debut_heure, fin_heure);
    // Vous pouvez également envoyer ces données à Laravel ici
  };

  
  return (
    <main id="main" className="main">
    <section className="section">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Agenda</h5>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <label htmlFor="inputDate" className="col-sm-2 col-form-label">
                    Date
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      className="form-control"
                      value={day}
                      onChange={(e) => setday(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputTime" className="col-sm-2 col-form-label">
                    Time
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="time"
                      className="form-control"
                      value={debut_heure}
                      onChange={(e) => setdebut_heure(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputTime" className="col-sm-2 col-form-label">
                    Time
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="time"
                      className="form-control"
                      value={fin_heure}
                      onChange={(e) => setfin_heure(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Ajouter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Disponibilité</h5>

              
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Debut Heure</th>
                    <th scope="col">Fin Heure</th>
                    <th scope="col">Actions</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Brandon Jacob</td>
                    <td>Designer</td>
                    <td>28</td>
                    <td>2016-05-25</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Bridie Kessler</td>
                    <td>Developer</td>
                    <td>35</td>
                    <td>2014-12-05</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashleigh Langosh</td>
                    <td>Finance</td>
                    <td>45</td>
                    <td>2011-08-12</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Angus Grady</td>
                    <td>HR</td>
                    <td>34</td>
                    <td>2012-06-11</td>
                  </tr>
                  <tr>
                    <td>Raheem Lehner</td>
                    <td>Dynamic Division Officer</td>
                    <td>47</td>
                    <td>
                    {/* <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(index)}>
                     <FaEdit /> Modifier
                    </button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(index)}>
                     <FaTrash /> Supprimer
                    </button> */}
                    </td>
                  </tr>
                </tbody>
                {/* <tbody>
                {availabilities.map((availability, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{availability.debut_heure}</td>
                    <td>{availability.fin_heure}</td>
                    <td>
                    <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(index)}>
                     <FaEdit /> Modifier
                    </button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(index)}>
                     <FaTrash /> Supprimer
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </main>
);
};

export default AgendaComponent;
