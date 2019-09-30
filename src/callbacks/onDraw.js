import updateParticipantCount from './onDraw/updateParticipantCount';
import reset from './onDraw/reset';

export default function onDraw() {
    //Annotate selected and total number of participants.
    updateParticipantCount(this, '.annote');
    console.log(this.listing);
    //Reset things.
    reset.call(this);
}
