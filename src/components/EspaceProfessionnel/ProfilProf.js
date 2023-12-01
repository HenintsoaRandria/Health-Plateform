import React,{Component} from 'react';
import axios from 'axios';
import './sidebarProf.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar2 from '../images/avatar2.jpg'


class ProfilProf extends Component {
  constructor(props) {
    super(props);
    this.state = {

       // État pour le formulaire de profil
      name: '',
      last_name:'',
      nif:'',
      stat:'',
      type:'',
      num_ordre:'',
      email: '',
      phone_number: '',
      adresse: '',
      
      

       // État pour le formulaire de modification de mot de passe
       pwd: '',
       password: '',
       password_confirmation: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  // Fonction de gestion de la soumission pour le formulaire de profil
  handleProfileSubmit = async (e) => {
    e.preventDefault();

    //requête vers l'API Laravel pour mettre à jour le profil
    try {
      const response = await axios.patch('http://localhost:8000/api/professionnel/update/info', {
        adresse: this.state.adresse,
        phone_number: this.state.phone_number,
        email: this.state.email,
      });

      // Traitez la réponse si nécessaire
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la requête API pour le profil:', error);
    }
  };


 // Fonction de gestion de la soumission pour le formulaire de modification de mot de passe
 handlePasswordSubmit = async (e) => {
  e.preventDefault();

  const { pwd, password, password_confirmation } = this.state;

  // Vérification si les mots de passe correspondent ou effectuez d'autres validations nécessaires.

  // la requête vers l'API Laravel pour mettre à jour le mot de passe
  try {
    const response = await axios.put('http://localhost:8000/api/professionnel/update/pwd', {
      current_password: pwd,
      new_password: password,
      renew_password: password_confirmation,
    });

    // Traitez la réponse si nécessaire
    console.log(response.data);
  } catch (error) {
    console.error('Erreur lors de la requête API pour le mot de passe:', error);
  }
};

render() {
 
  return(
    <div>
      <main id="main" class="main">

      <div class="pagetitle">
      <h1>Profil</h1>
      
    </div>
    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">

          <div class="card">
            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src={avatar2} alt="Profile" class="rounded-circle"></img>
              {/* <h2>Hajaina</h2>
              <h3>Rémi</h3> */}
                <h2>{this.state.name}</h2>
                <h3>{this.state.last_name}</h3>
            </div>
          </div>

        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
             
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Profil</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Modification</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Changer Mot de passe</button>
                </li>

              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview"> 
                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Nom</div>
                    <div class="col-lg-9 col-md-8">{this.state.name}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Prénoms</div>
                    <div class="col-lg-9 col-md-8">{this.state.last_name}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">NIF</div>
                    <div class="col-lg-9 col-md-8">{this.state.nif}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Numéro statistique</div>
                    <div class="col-lg-9 col-md-8">{this.state.stat}</div>
                  </div>


                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Spécialité</div>
                    <div class="col-lg-9 col-md-8">{this.state.type}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Numéro d'ordre</div>
                    <div class="col-lg-9 col-md-8">{this.state.num_ordre}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8">{this.state.email}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Téléphone</div>
                    <div class="col-lg-9 col-md-8">{this.state.phone_number}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Adresse</div>
                    <div class="col-lg-9 col-md-8">{this.state.adresse}</div>
                  </div>

                </div>

                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                 
                  <form>
                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profil Image</label>
                      <div class="col-md-8 col-lg-9">
                        <img src={avatar2} alt="Profile"></img>
                        <div class="pt-2">
                          <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                          <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div class="col-md-8 col-lg-9">
                        <input 
                        name="phone" 
                        type="text" 
                        class="form-control" 
                        id="Phone" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    
                    <div class="row mb-3">
                      <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Téléphone</label>
                      <div class="col-md-8 col-lg-9">
                        <input 
                        name="phone" 
                        type="text" 
                        class="form-control" 
                        id="Phone" 
                        value={this.state.phone_number}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Address" class="col-md-4 col-lg-3 col-form-label">Adresse</label>
                      <div class="col-md-8 col-lg-9">
                        <input 
                        name="address" 
                        type="text" 
                        class="form-control" 
                        id="Address" 
                        value={this.state.adresse}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Enregistrer</button>
                    </div>
                  </form>

                </div>

                <div class="tab-pane fade pt-3" id="profile-change-password">
                  
                  <form onSubmit={this.handleSubmit}>

                    <div class="row mb-3">
                      <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Mot de passe actuel</label>
                      <div class="col-md-8 col-lg-9">
                      <input 
                        name="password" 
                        type="password" 
                        class="form-control" 
                        id="currentPassword" 
                        value={this.state.pwd}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">Nouveau mot de passe</label>
                      <div class="col-md-8 col-lg-9">
                      <input 
                        name="newpassword" 
                        type="password" 
                        class="form-control" 
                        id="newpassword" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-entrer nouveau mot de passe</label>
                      <div class="col-md-8 col-lg-9">
                      <input 
                        name="renewpassword" 
                        type="password" 
                        class="form-control" 
                        id="renewPassword"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">Enregistrer</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main> 
    </div>
   );

 }

}

export default ProfilProf;

 