import React,{useState} from 'react';
import axios from 'axios';
import Conditions from "../condition";
import classes from "./Forecast.module.css";

const Forecast = () => {

    let [responseObj,setResponsObj]= useState({})
    let [city,setCity]=useState("");
    const encodedCity=encodeURIComponent(city);


    function handleChange(e){
      setCity(e.target.value)
      
  }

  async function getForecast(e) {
    e.preventDefault();
    const url="http://api.openweathermap.org/data/2.5/weather?q="+encodedCity+"&appid=bedfefd27eda9f84d459ac6746fbfa08&units=metric";
    const result = await axios.get(url) ;
    setResponsObj (result.data) 
    
    
   }
   
   

   return (
    
    <div>
        <h2>Find Current Weather Conditions</h2>
        <form >
          <input type="text" 
          placeholder="Enter City" 
          value={city}
          onChange={handleChange} 
          className={classes.textInput}
          />
          <button onClick={getForecast} className={classes.Button} type ="submit">Get Forecast</button>
        </form>
        <Conditions responseObj={responseObj} />
    </div>

   )
}

export default Forecast;