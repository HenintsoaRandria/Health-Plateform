import React, { useState } from 'react';
import './RegisterProfessionnel.css';
import { Link } from 'react-router-dom';

export default  function RegisterPatient(){
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const[email,setemail]=useState('');
  const[fusername,setfusername]=useState('');
  const[Susername,setSusername]=useState('');
  const[ordre,setordre]=useState('');
  const[specialite,setspecialite]=useState('');
  const[tel,settel]=useState('');
  const[adresse,setadresse]=useState('');
  const[quartier,setquartier]=useState('');
  const[pwd,setpwd]=useState('');
  const[Cpwd,setCpwd]=useState('');

  return(
    <div className='main-Register'>
       <div className='body-right'>
       <div className='container'>
          <h3>creer compte!</h3>
          <form onSubmit={handleSubmit}>
                    {/* <label for="email">Nom</label> */}
                    <input placeholder="Entrer votre nom" type="text" value={fusername} onChange={(e)=>{setfusername(e.target.value)}} id="name"></input>
                    {/* <label for="email">Prenoms</label> */}
                    <input placeholder="Entrer votre prenom" type="text" value={Susername} onChange={(e)=>{setSusername(e.target.value)}} id="name"></input>
                    {/* <label for="email">Prenoms</label> */}
                    <input placeholder="Numero d'ordre" type="number" value={ordre} onChange={(e)=>{setordre(e.target.value)}} id="name"></input>
                     <select placeholder="Entrer votre specialite" type="text" name="cars" value={specialite} onChange={(e)=>{setspecialite(e.target.value)}} id="pwd">
                         <option value="volvo">Entrer votre spécialité</option>
                         <option value="volvo">dentiste</option>
                         <option value="saab">generaliste</option>
                         <option value="fiat">dermatologue</option>
                         <option value="audi">cardiologue</option>
                    </select> 
                     {/* <label for="pwd">Email</label> */}
                     <input placeholder="Entrer votre email" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} id="pwd"></input>
                    {/* <label for="email">Telephone</label> */}
                    <input placeholder="Numero telephone" type="text" value={tel} onChange={(e)=>{settel(e.target.value)}} id="name"></input>
                    {/* <label for="email">Adresse</label> */}
                    <input placeholder="Entrer votre adresse" type="text" value={adresse} onChange={(e)=>{setadresse(e.target.value)}} id="name"></input>
                    {/* <label for="email">Quartier</label> */}
                    <input placeholder="Entrer votre quartier" type="text" value={quartier} onChange={(e)=>{setquartier(e.target.value)}} id="name"></input>
                    {/* <label for="email">Mot de passe</label> */}
                    <input placeholder="Entrer votre mot de passe" type="password" value={pwd} onChange={(e)=>{setpwd(e.target.value)}} id="name"></input>
                    {/* <label for="email">Confirmer mot de passe</label> */}
                    <input placeholder="Veuillez confirme votre mot de passe" type="password" value={Cpwd} onChange={(e)=>{setCpwd(e.target.value)}} id="name"></input>
                    <button className="sub_butt">Enregistrer</button>
          </form>
          <div className='top-right'>
          <h6>already have account?
          <Link id="Links-signin" to='/professionnel'>Connexion</Link></h6>
        </div>
       </div>
       </div>
    </div>

  );

}