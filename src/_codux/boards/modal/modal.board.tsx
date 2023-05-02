import { createBoard } from '@wixc3/react-board';
import { Modal } from '../../../components/modal/modal';

export default createBoard({
    name: 'Modal',
    Board: () => <Modal />,
    environmentProps: {
        windowWidth: 360,
        windowHeight: 740,
        canvasWidth: 483,
        canvasHeight: 884,
    },
});
