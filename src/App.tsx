import { useState } from 'react';
import styles from './App.module.scss';
import { Portrait } from './components/portrait/portrait';
import { SongLirics } from './components/song-lirics/song-lirics';
import { CalendarTimer } from './components/calendar-timer/calendar-timer';
import { Card } from './components/card/card';
import ringsPhoto from './assets/boda.png';
import dresscodePhoto from './assets/codigo-de-vestimenta.png';
import Card_module from './components/card/card.module.scss';
import collagePhoto from './assets/20181111_005416-COLLAGE.jpg';
import invitePhoto from './assets/invitacion-de-boda.png';
import giftPhoto from './assets/regalo.png';
import { Modal } from './components/modal/modal';
import Classnames from 'classnames';

function App() {
    const [openDataBank, setOpenDataBank] = useState(false);
    const handleModal = () => setOpenDataBank(!openDataBank);
    const cbu = '0170274540000004430197';
    const alias = 'TENIS.AVIAR.DADO';
    const handleCopyClick = (data: string) => {
        navigator.clipboard.writeText(data);
    };

    return (
        <div className={Classnames(styles.App, styles.container)}>
            <div className={styles.portraitContainer}>
                <Portrait />
            </div>
            <SongLirics />
            <CalendarTimer />
            <div className={styles.portraitContainer}>
                <Card
                    buttonProps={{
                        text: 'Cómo llegar',
                        href: 'https://goo.gl/maps/fZDk4b2oXyZ6uaTN8',
                    }}
                    title="Ceremonia"
                    icons={<img src={ringsPhoto} />}
                    footer={
                        <div className={styles.dressCodeFooter}>
                            <img src={dresscodePhoto} className={styles.dresscodeImage} />
                            <p className={Card_module.cardTitle}>¿Qué nos ponemos?</p>
                            <p className={styles.locationText}>Dresscode: elegante - sport</p>
                            <p className={styles.dresscodeText}>
                                ¡No olvides llevar malla y toallas para meterte a la pileta!
                            </p>
                        </div>
                    }
                >
                    <p className={styles.locationText}>Camping Bahia del Gitano</p>
                    <p className={styles.cardTextMargin}>4 de noviembre de 2023</p>
                    <p className={styles.cardTextMargin}>
                        Av. Ramón J. Cárcano 1691, Villa Carlos Paz, Córdoba
                    </p>
                    <p>11:00 hs.</p>
                </Card>
            </div>
            <img src={collagePhoto} className={styles.collagePhoto} />
            <div className={styles.portraitContainer}>
                <Card
                    title={'¿Venís?'}
                    buttonProps={{
                        text: 'Confirmar asistencia',
                        href: 'https://forms.gle/U9mNs7pNn69hGQa97',
                    }}
                    icons={<img src={invitePhoto} className={styles.inviteImg} />}
                >
                    <p className={Card_module.cardText}>
                        Esperamos que puedas acompañarnos en este momento especial.
                        <p className={Card_module.cardText}>
                            Recordá que tenes tiempo hasta Agosto inclusive para confirmar tu
                            asistencia.
                        </p>
                    </p>
                </Card>
                <Card
                    buttonProps={{
                        text: 'ver información',
                        onClick: () => setOpenDataBank(!openDataBank),
                    }}
                    icons={<img src={giftPhoto} />}
                >
                    <p className={Card_module.cardText}>
                        Lo que más queremos es compartir con vos nuestro gran día!, Pero si deseas
                        regalarnos algo podés hacer clic en el siguiente botón{' '}
                    </p>
                </Card>
            </div>
            <div className={styles.thanksContainer}>
                <p className={styles.thanksText}>¡Gracias!</p>
            </div>
            <Modal open={openDataBank} onChange={handleModal}>
                <p className={styles.giftTitle}>datos bancarios</p>
                <p className={styles.giftText}>Nombre del titular: Brenda Lara Dearmas</p>
                <p className={styles.giftText}>CBU: {cbu}</p>
                <p className={styles.giftText}>Alias: {alias}</p>
                <p className={styles.giftText}>DNI: 35473619</p>
                <p className={styles.giftText}>Banco BBVA</p>
                <div className={styles.giftActions}>
                    <button
                        className={Card_module.actionButton}
                        onClick={() => handleCopyClick(cbu)}
                    >
                        CBU
                    </button>
                    <button
                        className={Card_module.actionButton}
                        onClick={() => handleCopyClick(alias)}
                    >
                        Alias
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default App;
