import React ,{useState} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Rendezvous.css';
import images3 from '../images/images3.jpg';


const Rendezvous = () => {

    // const [nom,setnom]=useState("");
    // const [prenom,setprenom]=useState("");
    // const [email,setemail]=useState("");
    // const [tel,settel]=useState("");
    // const [heure,setheure]=useState("");
    // const [date, setdate]=useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const handleSubmit =(e)=>{
        e.preventDefault();
        const rendezvousData = {
            // nom,
            // prenom,
            // email,
            // tel,
            date: selectedDate.toISOString().split('T')[0], // Format the date to YYYY-MM-DD
          };

          // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your Laravel API
    axios
    .post('http://localhost:8000/api/rendezvous/demande/{id}', rendezvousData)
    .then((response) => {
      console.log('Rendezvous ajouté avec succès:', response.data);
      // Handle success (e.g., show a success message or redirect the user)
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du rendezvous:', error);
      // Handle error (e.g., show an error message to the user)
    });
};

  return(
    <div>
        <section id="appointment">
        <div class="container">
            <div class="formulaire">
                <h3>Prendre de rendez-vous</h3>
                <form action="#" method="post" onSubmit={handleSubmit}>
                    {/* <input placeholder="Nom" name="name" type="text" value={nom} onChange={(e)=>{setnom(e.target.value)}} required="" class="nom"></input>
                    <input placeholder="Prenom" name="prenom" type="text" value={prenom} onChange={(e)=>{setprenom(e.target.value)}} required="" class="prenom"></input>
                    <input placeholder="Email" name="email" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required="" class="email"></input>
                    <input placeholder="Telephone" name="tel" type="number" value={tel} onChange={(e)=>{settel(e.target.value)}} required="" class="numero"></input> */}
                    <div className="date-picker">
                    <label for="date">Date</label>
                    <DatePicker
                    //  selected={date}
                    //  onChange={(newDate) => setdate(newDate)}
                     selected={selectedDate}
                     onChange={handleDateChange}
                     dateFormat="yyyy-MM-dd"
                     className="date"
                     showTimeSelect
                     timeFormat="HH:mm"
                     timeIntervals={15}
                     timeCaption="Time"
                    />
                    {/* <input placeholder="Date" name="name" type="date" value={date} onChange={(e)=>{setdate(e.target.value)}}required="" class="nom"></input>
                    <input placeholder="Heure" name="prenom" type="horaire" value={heure} onChange={(e)=>{setheure(e.target.value)}} required="" class="prenom"></input> */}
                    <button className='submit-btn'>Confirmer</button>
                    </div>
                </form>
            </div>
            <div class="formulaire-image">
                <img src={images3} alt=""></img>
            </div>

        </div>
    </section>

    </div>
   )

 }

 export default Rendezvous