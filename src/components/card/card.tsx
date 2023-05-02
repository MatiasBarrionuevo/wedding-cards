import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import CalendarTimer_module from '../calendar-timer/calendar-timer.module.scss';

export interface CardProps {
    className?: string;
    title?: string;
    children: ReactNode;
    icons: ReactNode;
    footer?: ReactNode;
    buttonProps: {
        text: string;
        onClick?: () => void;
        href?: string;
    };
}

export const Card = ({ className, title, children, buttonProps, icons, footer }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>{icons}</div>
            <p className={styles.cardTitle}>{title}</p>
            <div className={styles.cardText}>{children}</div>
            {buttonProps?.href ? (
                <a href={buttonProps.href}>
                    <button className={styles.actionButton}>{buttonProps?.text}</button>
                </a>
            ) : (
                <button onClick={buttonProps?.onClick} className={styles.actionButton}>
                    {buttonProps?.text}
                </button>
            )}
            {footer}
        </div>
    );
};
