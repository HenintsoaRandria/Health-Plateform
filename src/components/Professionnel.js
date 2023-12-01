import React, {useState} from "react";
import axios from 'axios';
import '../components/ConnexionPatient/LoginPatient.css';
import { Link } from "react-router-dom";
import avatar2 from '../components/images/avatar2.jpg';
import images3 from '../components/images/images3.jpg';
import { useNavigate } from 'react-router-dom';



export default function Professionnel(){

    const [email,setemail]=useState("");
    const [password, setpassword]=useState("");
    const navigate = useNavigate(); 

    const handleSubmit =(e)=>{
       e.preventDefault();
       navigate('/espaceprof');

        
        const formData = {
            email: email,
            password: password,
        };

        
        axios.post('http://localhost:8000/api/professionnel/login', formData)
            .then(response => {
                console.log('Réponse du serveur :', response.data);
                navigate('/espaceprof');
            })
            .catch(error => {
                console.error('Erreur lors de l\'authentification :', error);
            });
    };

        return (
            <div className="main-login">
                <div class="login-contain">
                    <div className="left-side">
                        <div className="welcomeNote">
                            <h3>Connexion en tant que professionnel de santé</h3>
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
                            <input placeholder="Entrer votre email" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} id="email"></input>
                            <label for="pwd">Mot de passe</label>
                            <input placeholder="Entrer le mot de passe" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} id="pwd"></input>
                            <button className="sub_butt">Se connecter</button>
                        </form>
                        <div className="footer">
                            <h4>Vous n'avez de compte?</h4> <Link to='/registrationProfessionnel'>Inscrire ici</Link>
        
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        
    );
}