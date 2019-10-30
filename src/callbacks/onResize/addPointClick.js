import { select } from 'd3';
import drawMeasureTable from './addPointClick/measureTable/drawMeasureTable';

export default function addPointClick() {
    var chart = this;
    var config = this.config;
    var points = this.marks[0].circles;

    points.on('click', function(d) {
        points
            .attr('stroke', d => chart.colorScale(d.values.raw[0][config.color_by]))
            .attr('stroke-width', 0.5);

        select(this)
            .attr('stroke-width', 3)
            .attr('stroke', 'black');
        drawMeasureTable.call(chart, d);
    });
}
