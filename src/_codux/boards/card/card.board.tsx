import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card children={undefined} icons={undefined} buttonProps={{
        text: '',
        onClick: undefined,
        href: undefined
    }} />,
    environmentProps: {
        windowWidth: 360,
        windowHeight: 740,
    },
});
