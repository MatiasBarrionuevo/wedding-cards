import { createBoard } from '@wixc3/react-board';
import { CalendarTimer } from '../../../components/calendar-timer/calendar-timer';

export default createBoard({
    name: 'CalendarTimer',
    Board: () => <CalendarTimer />,
    environmentProps: {
        windowWidth: 360,
        windowHeight: 740,
    },
});
