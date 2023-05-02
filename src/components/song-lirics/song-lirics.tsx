import classNames from 'classnames';
import styles from './song-lirics.module.scss';
import DiscImage from '../../assets/cancion-de-amor.png';

export interface SongLiricsProps {
    className?: string;
}

export const SongLirics = ({ className }: SongLiricsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={DiscImage} />
            <p className={styles.liricsContainer}>
                &quot;Solo tú, no necesito más Te adoraría lo que dure la eternidad Debes
                serperfectapara, perfecto para Perfecta para mí, mi amor&quot;
            </p>
        </div>
    );
};
