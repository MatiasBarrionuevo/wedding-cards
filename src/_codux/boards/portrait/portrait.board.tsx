import { createBoard } from '@wixc3/react-board';
import { Portrait } from '../../../components/portrait/portrait';

export default createBoard({
    name: 'Portrait',
    Board: () => <Portrait />,
    environmentProps: {
        canvasWidth: 1050,
        windowWidth: 360,
        windowHeight: 740,
    },
});
