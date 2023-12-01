import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RegisterPatient.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default  function RegisterPatient(){

  const[name,setname]=useState('');
  const[last_name,setlast_name]=useState('');
  const[email,setemail]=useState('');
  const[phone_number,setphone_number]=useState('');
  const[adresse,setadresse]=useState('');
  const[password,setpassword]=useState('');
  const[password_confirmation,setpassword_confirmation]=useState('');
  const navigate = useNavigate(); 

  const handleSubmit=(e)=>{
    e.preventDefault();

  }

  const envoyerFormulaire = () => {
    // Effectuez des validations si nécessaire

    // Créez un objet avec les données du formulaire
    const formData = {
        name,
        last_name,
        email,
        phone_number,
        adresse,
        password,
        password_confirmation,
    };

     
     axios.post('http://localhost:8000/api/patient/insert', formData)
     .then(response => {
         console.log('Registration reussie:', response.data);

         navigate('/userConnected');
     })
     .catch(error => {
         console.error('Erreur lors de l\'envoi des données au serveur :', error);
     });
};
 
  return(
    <div>
    <div className='main-Register'>
    <div className='body-right'>
      <form onSubmit={handleSubmit} className='container'>
        <div className='card'>
          <div className='card-header'>
            <h1>Inscription</h1>

          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group'>
                <label for="nom">Votre nom</label>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} id="name"></input>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group'>
                <label for="prenom">Votre prénoms</label>
                <input  type="text" value={last_name} onChange={(e)=>{setlast_name(e.target.value)}} id="name"></input>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group'>
                <label for="nom">Votre email</label>
                <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} id="name"></input>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group'>
                <label for="nom">Votre numéro téléphone</label>
                <input type="number" value={phone_number} onChange={(e)=>{setphone_number(e.target.value)}} id="name"></input>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group'>
                <label for="nom">Votre adresse</label>
                <input type="text" value={adresse} onChange={(e)=>{setadresse(e.target.value)}} id="name"></input>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group'>
                <label for="nom">Votre mot de passe</label>
                <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} id="name"></input>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group'>
                <label for="nom">Confirmer votre mot de passe</label>
                <input type="password" value={password_confirmation} onChange={(e)=>{setpassword_confirmation(e.target.value)}} id="name"></input>
                </div>
              </div>
              <div className='card-footer '>
              <button onClick={envoyerFormulaire} className="sub_butt">Enregistrer</button>
              <h6>Avez-vous déjà un compte?
               <Link id="Links-signin" to='/patient'>Connexion</Link></h6>
            </div>

          </div>
         
     

         </div>

        </div>
      </form>
      </div>

    </div>
  </div>
         
    

  );

  }
  