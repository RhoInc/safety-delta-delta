import addSparkLines from './addSparkLines';
import formatDelta from './formatDelta';
import addAxisFlag from './addAxisFlag';
import showParticipantDetails from './showParticipantDetails';

export default function drawMeasureTable(d) {
    var chart = this;
    var config = this.config;

    const point_data = d.values.raw[0];
    chart.listing.wrap.style('display', null);
    chart.listing.on('draw', function() {
        showParticipantDetails.call(this, point_data);
        addSparkLines.call(this);
        formatDelta.call(this);
        addAxisFlag.call(this);

        this.thead.style('border-top', '2px solid black');
    });
    chart.listing.draw(point_data.measures);
}
