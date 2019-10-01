import drawMeasureTable from './addPointClick/measureTable/drawMeasureTable';

export default function addPointClick() {
    var chart = this;
    var config = this.config;
    var points = this.marks[0].circles;

    points.on('click', function(d) {
        drawMeasureTable.call(chart, d);
    });
}
