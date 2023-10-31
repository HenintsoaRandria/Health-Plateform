import React, {useState} from "react";
import '../components/ConnexionPatient/LoginPatient.css';
import { Link } from "react-router-dom";
import avatar2 from '../components/images/avatar2.jpg';
import images3 from '../components/images/images3.jpg';

export default function Patient(){

    const [emailval,setemailval]=useState("");
    const [passval, setpassval]=useState("");

    const handleSubmit =(e)=>{
       e.preventDefault();
    }
 
  return (
    <div className="main-login">
        <div class="login-contain">
            <div className="left-side">
                <div className="welcomeNote">
                    <h3>Connexion en tant que patient</h3>
                </div>
                <div className="welcomeImg">
                    <img src={images3} alt="" srcSet=""></img>

                </div>

            </div>
            <div className="right-side">
                <div className="img-class">
                    <img src={avatar2} id="img-id" alt="" srcSet=""></img>
                </div>
                <form onSubmit={handleSubmit}>
                    <label for="email">Email</label>
                    <input placeholder="Entrer votre email" type="email" value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id="email"></input>
                    <label for="pwd">Mot de passe</label>
                    <input placeholder="Entrer le mot de passe" type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd"></input>
                    <button className="sub_butt">Se connecter</button>
                </form>
                <div className="footer">
                    <h6>Vous n'avez de compte?</h6> <Link to='/registrationPatient'>Inscrire ici</Link>

                </div>
                
            </div>
            
        </div>
        
    </div>
  );
      
}



