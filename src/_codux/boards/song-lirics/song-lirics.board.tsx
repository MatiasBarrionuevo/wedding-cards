import { createBoard } from '@wixc3/react-board';
import { SongLirics } from '../../../components/song-lirics/song-lirics';

export default createBoard({
    name: 'SongLirics',
    Board: () => <SongLirics />,
    environmentProps: {
        windowWidth: 360,
        windowHeight: 740,
    },
});
