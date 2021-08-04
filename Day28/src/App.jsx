import React, { useEffect, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [place, setPlace] = useState("");
  const [placeData,setPlaceData]=useState({})

  const updateData=() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=6cc3f55dfbfa4584bb2154421210308&q=${place}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        console.log(data)
        setPlaceData(data)
      } )
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input type="" onChange={(e)=>{
              setPlace(e.target.value)

            }} />
            <button className="btn btn-primary" onClick={updateData}>Submit</button>
          </div>
        </div>

        <div className="offset-md-4 col-12 offset-md-4 weather">
          <div className="card">
            {
              placeData.location?
                <div> 
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="title">Wind now</div>
                          <div className="data">{placeData.current.wind_kph}
                            <span className="unit">KM</span>
                          </div>
                        </div>
                        <div className="col">
                        <div className="title">Humidity</div>
                          <div className="data">{placeData.current.humidity}
                            <span className="unit">%</span>
                          </div>
                        </div>
                        <div className="col">
                        <div className="title">Precipitation</div>
                          <div className="data">{placeData.current.precip_in}
                            <span className="unit">%</span>
                          </div>
                        </div>
                        </div>
                       
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3"></div>
   
                   
                  </div>
              
              :
              <h2>Place not found</h2>

            }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
