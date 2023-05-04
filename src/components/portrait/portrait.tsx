import classNames from 'classnames';
import styles from './portrait.module.scss';
import UsPhoto from '../../assets/nosotros.webp';

export interface PortraitProps {
    className?: string;
}

export const Portrait = ({ className }: PortraitProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.title}>¡Nos casamos!</h1>
            <h2 className={styles.namesTitle}>Lara y Mati</h2>
            <img src={UsPhoto} className={styles.photoPortrait} />
            <span className={styles.dateContainerPortrait}>
                <h2 className={styles.datePortrait}>04 . 11 . 2023</h2>
            </span>
        </div>
    );
};
