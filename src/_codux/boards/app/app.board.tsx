import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowBackgroundColor: '#dbccb9',
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 874,
    },
});
