import dayjs from 'dayjs';
import styles from './header.module.css';

const FORMAT_DATE_STRING = 'DD MMM YYYY';

export default function Header({city, icon, date, temp, description, shortDescription}) {
  return (
    <>
      <h2 className={styles.title}>{city}</h2>
      <time
        className={styles.date}
        dateTime={dayjs(date).toISOString()}
      >
        {dayjs(date).format(FORMAT_DATE_STRING)}
      </time>
      <div className={styles.icon}>
        <img src={`img/${icon}.png`} alt={shortDescription} />
      </div>
      <div className={styles.degree}>{temp}</div>
      <div className={styles.weather}>{description}</div>
    </>
  ) ;
}
