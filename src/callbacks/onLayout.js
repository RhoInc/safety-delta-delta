import initNotes from './onLayout/initNotes';
import updateVisitControls from './onLayout/updateVisitControls';

export default function onLayout() {
    initNotes.call(this);
    updateVisitControls.call(this);
}
