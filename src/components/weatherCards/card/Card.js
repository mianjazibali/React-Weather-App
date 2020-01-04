import React from 'react';
import _ from 'lodash';
import './Card.css';

let card = (props) => {
  let iconUrl = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;
  let descriptionArray = _.map(props.weather, _.property('description'));
  let description = descriptionArray.join();
  return (
    <div className="container-fluid shadow bg-white pt-4 pr-5 pb-5 pl-5 mb-5">
      <div className="row date">
        <div className="col">
          <span className="pull-left">{props.date}</span>
        </div>
        <div className="col">
          <span className="pull-right">{props.day}</span>
        </div>
      </div>
      <div className="row">
          <div className="col p-0">
            <div>
              <img src={iconUrl} alt={props.weather[0].description} />
            </div>
          </div>
          <div className="col my-auto">
            <div className="temp main float-left">
              {props.temp}
            </div>
            <div className="temp float-left">
              o
            </div>
          </div>
      </div> 
      <div className="row description">
        <div className="col-md-12">
          {description}
        </div>
      </div>
      <br />
      <div className="row mb-2">
        <div className="col p-0">
          <img src="clouds.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.cloudiness} %</span> 
        </div>
        <div className="col p-0">
          <img src="humidity.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.humidity} %</span> 
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <img src="windy.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.windSpeed} mt/s</span> 
        </div>
        <div className="col p-0">
          <img src="rain.svg" alt="Humidity" className="icon float-left" />
          <span className="float-left measurement">&nbsp; {props.rain} mm</span> 
        </div>
      </div>
    </div>
  );
}

export default card;