// import React from "react";
// import './contact.css';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const Contact =()=>{
//   return( 
//    <div class="contact-section">
//     <div class="contact-info">
//       <FontAwesomeIcon icon={faMapMarkerAlt} />
//       <span>Lot III DK Antanimena</span>

//       <FontAwesomeIcon icon={faPhone} />
//       <span>Téléphone</span>

//       <FontAwesomeIcon icon={faEnvelope} />
//       <span>E-mail</span>
//     </div>
//     <div class="contact-form">
//       <h2>Contactez-nous</h2>
//       <form class="contact">
//         <input type="text" name="" class="text-box" placeholder="Votre nom"></input>
//         <input type="email" name="" class="text-box" placeholder="Votre email"></input>
//         <textarea name="message" rows="5" placeholder="Ecrire message"></textarea>
//         <input type="submit" name="submit" class="send-box" value="Envoyer"></input>
//       </form>
//    </div>
//    </div>

//   )
// }

// export default Contact


import React from "react";
import './contact.css';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact =()=>{
  return(
   <section class="contact">
    <div class="content">
      <h2 class="texte">Contactez-nous</h2>
      <p>Si vous préférez nous contacter directement, voici nos coordonnées :</p>
    </div>
    <div class="container">
      <div class="contactInfo">
        <div class="box">
          <div class="icon"></div>
          <div class="text">
            <FontAwesomeIcon icon={faPhone} />
            <h3>Téléphone</h3>
            <p>+261344044868</p>
          </div>
        </div>
        <div class="box">
          <div class="icon"></div>
          <div class="text">
            <FontAwesomeIcon icon={faEnvelope} />
            <h3>Email</h3>
            <p>etsabo@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="contactForm">
        <form class="forme">
          <h2 class="texte">Envoyer message</h2>
          <div class="inputBox">
            <label for="inpute" >Nom</label>
            <input  class="inpute" type="text" name="" required="required"></input>
            {/* <span>Nom</span> */}
          </div>
          <div class="inputBox">
            <label for="inpute" >Prénoms</label>
            <input class="inpute"  type="text" name="" required="required"></input>
            {/* <span>Prenoms</span> */}
          </div>
          <div class="inputBox">
            <label for="inpute" >Email</label>
            <input class="inpute"  type="text" name="" required="required"></input>
            {/* <span>Email</span> */}
          </div>
          <div class="inputBox">
            <label for="textarea">Ecrire votre message</label>
            <textarea class="textarea" required="required"></textarea>
            {/* <span>Ecrire votre message</span> */}
          </div>
          <div class="inputBox">
            <input type="submit" name="" value="Envoyer"></input>
          </div>
        </form>
      </div>
    </div>
   </section>

  )
}

export default Contact