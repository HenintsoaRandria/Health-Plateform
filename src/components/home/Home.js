import React from 'react';
import './Home.css';
import med1 from '../images/med1.jpg';
import sagefemme from '../images/sagefemme.jpg';
import infirmiere from '../images/infirmiere.jpg';
import médecingénéraliste from '../images/médecingénéraliste.jpg';
import dentiste from '../images/dentiste.jpg';
import cardiologue from '../images/cardiologue.jpeg';
import dermatologue from '../images/dermatologue.jpg';



const Home =()=>{
    return(
        <>
        <div class="home">
          {/* <div class="home-back">
            <img src={med3}></img>

          </div> */}
            <div class="main-home">
                <div class="main-inner-home">
                    <h2>Découvrez une nouvelle ère de bien-être avec </h2>
                    <h1>E-TSABO</h1>
                    <p>la plateforme de recherche de professionnels de santé qui met votre santé entre vos mains.</p>

                    {/* <div class="ripple">
                        <a href='#'><i class="fas fa-play"></i></a>
                    </div> */}
                </div>
            </div>
            <div class="main-inner-home">
                <div class="right-content-img">
                    <img src={med1} alt=''></img>
                </div>

            </div>
           
        </div>
        <div class="services">
            <div class="service-heading">
               <h1><span>Trouvez le professionnel de santé adapté à votre situation  </span></h1>
            </div>
            <div class="main-services">
                <div class="main-inner-services">
                    <div class="services-img">
                        <img src={sagefemme}></img>
                    </div>
                    <div class="services-content">
                        <h2>Sage femme</h2>
                        {/* <p>de professionnel de santé</p> */}
                    </div>
                </div>
                <div class="main-inner-services">
                    <div class="services-img">
                        <img src={infirmiere}></img>
                    </div>
                    <div class="services-content">
                        <h2>Infirmi(è)re</h2>
                        {/* <p>de professionnel de santé</p> */}
                    </div>
                </div>
                <div class="main-inner-services">
                    <div class="services-img">
                        <img src={médecingénéraliste}></img>
                    </div>
                    <div class="services-content">
                        <h2>Médecin généraliste</h2>
                        {/* <p>de professionnel de santé</p> */}
                    </div>
                </div>
                <div class="main-inner-services">
                    <div class="services-img">
                        <img src={dentiste }></img>
                    </div>
                    <div class="services-content">
                        <h2>Dentiste</h2>
                        {/* <p>de professionnel de santé</p> */}
                    </div>
                </div>
                <div class="main-inner-services">
                    <div class="services-img">
                        <img src={cardiologue}></img>
                    </div>
                    <div class="services-content">
                        <h2>Cardiologue</h2>
                        {/* <p>de professionnel de santé</p> */}
                    </div>
                </div>
                <div class="main-inner-services">
                    <div class="services-img">
                        <img src={dermatologue}></img>
                    </div>
                    <div class="services-content">
                        <h2>Dermatologue</h2>
                        {/* <p>de professionnel de santé</p> */}
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-center">
      <p>copyright &copy:2023 All rights reserved by me</p>
    </footer>
        </>

    )
}
export default Home
   