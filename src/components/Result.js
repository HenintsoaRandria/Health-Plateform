import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './apropos.css';
import Information from './EspacePatient/Information';  
import Rendezvous from './EspacePatient/Rendezvous'; 

const Result = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Effectuez ici votre requête Axios pour récupérer les résultats de recherche depuis l'API Laravel
    axios.get('http://localhost:8000/api/type/all')
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des résultats:', error);
      });
  }, []);  // Le tableau vide en second argument signifie que cette fonction s'exécute une seule fois après le rendu initial


  const [showInformation, setShowInformation] = useState(false);
  const [showRendezvous, setShowRendezvous] = useState(false);

  const handleInfoButtonClick = () => {
    setShowInformation(true);
    setShowRendezvous(false);
  };

  const handleRendezvousButtonClick = () => {
    setShowInformation(false);
    setShowRendezvous(true);
  };

  return (
    <main id="main" className="main">
      <form>
        <ul className="message-list">
          {Array.isArray(results) && results.map((result, index) => (
            <li key={index} className="message-item">
              <a href="#" key={index}>
                <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                <div>
                  <h4>{result.name}</h4>
                  <h4>{result.last_name}</h4>
                  <p>Adresse: {result.adresse}</p>
                  <p>Spécialité: {result.type}</p>
                  <p>Email: {result.email}</p>
                  <p>Téléphone: {result.phone_number}</p>
                </div>
                <div className="buttons">
                  <button  
                  className="info-button"
                  onClick={() => handleInfoButtonClick(result)}>Informations</button>
                  <button 
                  className="appointment-button"
                  onClick={handleRendezvousButtonClick}>Rendez-vous</button>

                </div>
              </a>
            </li>
            
          ))}
          <li className="dropdown-footer">
            <a href="#">Voir tous</a>
          </li>

          {/* Afficher le composant Information si showInformation est true */}
          {showInformation && <Information />}

          {/* Afficher le composant Rendezvous si showRendezvous est true */}
          {showRendezvous && <Rendezvous />}
        </ul>
      </form>
    </main>
  );
};

export default Result;
