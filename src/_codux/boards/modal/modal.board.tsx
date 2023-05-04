import { createBoard } from '@wixc3/react-board';
import { Modal } from '../../../components/modal/modal';

export default createBoard({
    name: 'Modal',
    Board: () => <Modal onChange={function (): void {
        throw new Error('Function not implemented.');
    } } children={undefined} />,
    environmentProps: {
        windowWidth: 360,
        windowHeight: 740,
        canvasWidth: 483,
        canvasHeight: 884,
    },
});
