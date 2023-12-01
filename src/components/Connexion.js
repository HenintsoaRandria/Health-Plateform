import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Connexion(){
    const navigate = useNavigate();

  // Après l'authentification réussie, redirigez l'utilisateur vers l'interface après authentification
  const handleAuthentication = () => {
    // Effectuez l'authentification ici...
    navigate('/interfaceApresAuthentification');
  };


    return(
        // ... Votre formulaire d'authentification ...
        <>
        <h1 className="connexion">CONNEXION</h1>
        </>
    );
}

