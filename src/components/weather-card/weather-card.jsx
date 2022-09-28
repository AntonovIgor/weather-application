import {useState} from 'react';
import Header from './header/header';
import Detail from './detail/detail';

export default function WeatherCard({data}) {
  const [currentDay, setCurrentDay] = useState('today');
  const {city, sunrise, sunset} = data;

  const currentWeather = data[currentDay];
  const weatherDetail = {
    humidity: currentWeather.humidity,
    wind: currentWeather.wind,
    visibility: currentWeather.visibility,
    sunrise,
    sunset
  }

  return (
    <article className="card">
      <div className="left-col">
        <Header
          city={city}
          date={currentWeather.date}
          temp={currentWeather.temp}
          icon={currentWeather.icon}
          description={currentWeather.description}
          shortDescription={currentWeather.shortDescription}
        />
      </div>
      <div className="right-col">
        <Detail
          onChangeDay={({target}) => setCurrentDay(target.id)}
          weatherDay={currentDay}
          weather={weatherDetail}
        />
      </div>
    </article>
  );
}
