import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    environmentProps: {
        windowWidth: 360,
        windowHeight: 740,
    },
});
