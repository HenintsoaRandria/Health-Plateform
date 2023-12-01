import React, { useState } from 'react';
import axios from 'axios';
import './Recherche.css';
import images3 from './images/images3.jpg';
import { useNavigate } from 'react-router-dom';


const Recherche = () => {
  const [type, settype] = useState ('');
  // const [address, setAddress] = useState('');
  // const [quartier,setQuartier] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'professionalType') {
      settype(value);
    }
  };

  const handleSearch = () => {
    navigate("/resultat"); //passage forcE
   
    axios
    .get('http://localhost:8000/api/type/all', {
      params: {
        professionalType: type,
      },
    })
    .then((response) => {
      setSearchResults(response.data);
      navigate('/resultat');
    })
    .catch((error) => {
      console.error(error);
    });

  };

  return (
    <div>
      <section id="appointment">
        <div className="container">
          <div className="formulaire">
            <h3>Recherche de professionnels de santé</h3>
            <form action="#" method="post">
              {/* <label>
                Type de professionnel:
                <input
                  type="text"
                  name="professionalType"
                  value={professionalType}
                  onChange={handleInputChange}
                  required
                />
              </label> */}

             <label>
                Type de professionnel de santé:
               <select
                  name="professionalType"
                  value={type}
                  onChange={handleInputChange}
                  required
               >
                <option value="">Sélectionnez un type</option>
                <option value="type1">cardiologue</option>
                <option value="type2">dermatologue</option>
                <option value="type3">generaliste</option>
                <option value="type3">dentiste</option>
                </select>
             </label>

              {/* <label>
                Votre adresse:
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                  required
                />
              </label> */}
              {/* <label>
                Votre quartier:
                <input
                  type="text"
                  name="quartier"
                  value={quartier}
                  onChange={handleInputChange}
                  required
                />
              </label> */}
              <button onClick={handleSearch} className='submit-btn'>Rechercher</button>
            </form>
            {searchResults.length > 0 ? (
              <div>
                <h3>Résultats de la recherche :</h3>
                <ul>
                  {searchResults.map((result, index) => (
                    <li key={index}>{/* Affichez ici les détails de chaque résultat */}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p></p>  //Aucun résultat trouvé.
            )}
          </div>
          <div className="formulaire-image">
            <img src={images3} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recherche;
