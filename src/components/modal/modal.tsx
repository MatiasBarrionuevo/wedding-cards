import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';

export interface ModalProps {
    open?: boolean;
    className?: string;
    onChange: () => void;
    children: ReactNode;
}

export const Modal = ({ className, open, onChange, children }: ModalProps) => {
    return open ? (
        <div className={classNames(styles.root, className)}>
            <div className={styles.modalContainer}>
                <div className={styles.modalClose}>
                    <button className={styles.modalCloseButton} onClick={onChange}>X</button>
                </div>
                <div className={styles.modalContent}>{children}</div>
            </div>
        </div>
    ) : null;
};
