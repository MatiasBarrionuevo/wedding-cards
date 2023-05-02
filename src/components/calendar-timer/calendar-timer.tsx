import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './calendar-timer.module.scss';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export interface CalendarTimerProps {
    className?: string;
}

const dDay = dayjs('2023-11-04');

export const CalendarTimer = ({ className }: CalendarTimerProps) => {
    const [time, setTime] = useState({});
    useEffect(() => {
        setTimeout(() => {
            const now = dayjs();
            const diff = dayjs.duration(dDay.diff(now));
            const days = Math.trunc(diff.asDays());
            const hours = Math.trunc(diff.asHours() % 24);
            const minutes = Math.trunc(diff.asMinutes() % 60);
            const seconds = Math.trunc(diff.asSeconds() % 60);
            setTime({ days, hours, minutes, seconds });
        }, 1000);
    }, [time]);

    return (
        <div className={classNames(styles.root, className)} aria-activedescendant="">
            <p className={styles.dateText}>Preparate, faltan...</p>
            <div className={styles.dateContainer}>
                <div className={styles.dateNumberContainer}>
                    <span className={styles.dateNumber}>{time.days}</span>
                    <span>Días</span>
                </div>
                <div className={styles.dateNumberContainer}>
                    <span className={styles.dateNumber}>{time.hours}</span>
                    <span>Horas</span>
                </div>
                <div className={styles.dateNumberContainer}>
                    <span className={styles.dateNumber}>{time.minutes}</span>
                    <span>Minutos</span>
                </div>
                <div className={styles.dateNumberContainer}>
                    <span className={styles.dateNumber}>{time.seconds}</span>
                    <span>Segundos</span>
                </div>
            </div>
            <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20231104T140000Z%2F20231104T220000Z&text=Boda%20-%20Mati%20y%20Lara&location=Camping%20Bahia%20del%20Gitano%2C%20Av.%20Ram%C3%B3n%20J.%20C%C3%A1rcano%201691%2C%20X5152%20Villa%20Carlos%20Paz%2C%20C%C3%B3rdoba&details=Ven%C3%AD%20a%20acompa%C3%B1arnos%20en%20el%20comienzo%20de%20una%20nueva%20aventura%2C%20!la%20del%20papeleo!%20y%20bueno%20nuestra%20uni%C3%B3n%20como%20personas%20que%20nos%20amamos!%20!esperamos%20verte%20ah%C3%AD!">
                <button className={styles.addEventButton}>Agendar</button>
            </a>
        </div>
    );
};
