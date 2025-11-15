import React, { useContext, useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { TiWeatherWindy } from 'react-icons/ti';
import { WiHumidity } from 'react-icons/wi';
import axios from 'axios';
import { CityContext } from './CityContext';

const Card = () => {
  const { name } = useContext(CityContext);
  const [cityName, setCityName] = useState('');
  const [temp, setTemp] = useState('');
  const [text, setText] = useState('');
  const [icon, setIcon] = useState('');
  const [wind, setWind] = useState('');
  const [hum, setHum] = useState('');
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=13bdd46b48e24e1597c164312251511&q=${name}&aqi=no`
      )
      .then(function (response) {
        const result = response.data;
        setCityName(result.location.name);
        setTemp(result.current.temp_c);
        setHum(result.current.humidity);
        setWind(result.current.wind_mph);
        setText(result.current.condition.text);
        setIcon(result.current.condition.icon);
      })
      .catch(function (error) {
        console.log(error);
        alert("The weather for this city isn't Available");
      });
  }, [name]);

  return (
    <section className="text-(--foreground) card-container px-8 my-8 bg-(--card) w-fit mx-auto p-2 rounded-xl shadow-lg">
      <div className="city mt-2 flex justify-center items-center text-lg gap-1 font-semibold">
        <CiLocationOn />
        <h3>{cityName}</h3>
      </div>
      <div className="weather-logo text-8xl  flex justify-center my-8">
        <img src={`https:${icon}`} alt={text} />
      </div>
      <div className="temp">
        <h3 className="text-5xl font-bold ">{Math.round(+temp)}°C</h3>
        <div className="temp-text text-(--muted-foreground) flex justify-center gap-1.5 items-center pt-2">
          <p>{text}</p>
        </div>
      </div>
      <div className="details flex gap-10 mt-3.5 pb-3">
        <div className="flex flex-col gap-2 windSpeed">
          <div className="flex items-center  gap-1 wind-text">
            <TiWeatherWindy />
            <p className="text-xs">Wind Speed</p>
          </div>
          <div className="text-xl font-bold windNum">
            <h3>{wind} m/h</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 humidity">
          <div className="flex items-center  gap-1 humidity-text">
            <WiHumidity />
            <p className="text-xs">Humidity</p>
          </div>
          <div className="text-xl font-bold humidityNum">
            <h3>{hum}%</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
