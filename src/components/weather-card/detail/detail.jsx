import {WeatherDay} from '../../../const';

export default function Detail({onChangeDay, weatherDay, weather}) {
  const entities = Object.entries(weather);
  return (
    <>
      <dl className="card__details details">
        {entities.map(([title, value]) => (
          <div key={title} className="details__group">
            <dt>{title}</dt>
            <dt>{value}</dt>
          </div>
        ))}
      </dl>
      <div className="card__toggle toggle">
        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.Today}
          className="toggle__radio"
          type="radio"
          name="day"
          id="today"
        />
        <label
          className="toggle__label"
          htmlFor="today"
        >
          Today
        </label>
        <input
          onChange={onChangeDay}
          checked={weatherDay === WeatherDay.Tomorrow}
          className="toggle__radio"
          type="radio"
          name="day"
          id="tomorrow"
        />
        <label className="toggle__label" htmlFor="tomorrow">Tomorrow</label>
      </div>
    </>
  );
}
