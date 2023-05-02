import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowBackgroundColor: '#dbccb9',
        windowWidth: 360,
        windowHeight: 740,
        canvasHeight: 874,
    },
});
