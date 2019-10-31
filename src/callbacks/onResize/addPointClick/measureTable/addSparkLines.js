import { select, scale, extent, svg } from 'd3';

export default function addSparkLines(d) {
    var table = this;
    var chart = this.chart;
    var config = this.chart.config;

    if (this.data.raw.length > 0) {
        //don't try to draw sparklines if the table is empty
        this.tbody
            .selectAll('tr')
            .style('background', 'none')
            .style('border-bottom', '.5px solid black')
            .each(function(row_d) {
                //Spark line cell
                const cell = select(this)
                        .select('td.spark')
                        .classed('minimized', true)
                        .text(''),
                    toggle = select(this)
                        .select('td.toggle')
                        .html('&#x25BD;')
                        .style('cursor', 'pointer')
                        .style('color', '#999')
                        .style('vertical-align', 'middle'),
                    width = 100,
                    height = 25,
                    offset = 4,
                    overTime = row_d.raw.sort(
                        (a, b) => +a[config.visitn_col] - +b[config.visitn_col]
                    );

                var x = scale
                    .linear()
                    .domain(extent(overTime, m => +m[config.visitn_col]))
                    .range([offset, width - offset]);

                //y-domain includes 99th population percentile + any participant outliers
                var y = scale
                    .linear()
                    .domain(extent(overTime, m => +m[config.value_col]))
                    .range([height - offset, offset]);

                //render the svg
                var canvas = cell
                    .append('svg')
                    .attr({
                        width: width,
                        height: height
                    })
                    .append('g');

                //draw the sparkline
                var draw_sparkline = svg
                    .line()
                    .interpolate('linear')
                    .x(d => x(d[config.visitn_col]))
                    .y(d => y(d[config.value_col]));
                var sparkline = canvas
                    .append('path')
                    .datum(overTime)
                    .attr({
                        class: 'sparkLine',
                        d: draw_sparkline,
                        fill: 'none',
                        stroke: '#999'
                    });

                //draw baseline values

                var circles = canvas
                    .selectAll('circle')
                    .data(overTime)
                    .enter()
                    .append('circle')
                    .attr('class', 'circle outlier')
                    .attr('cx', d => x(d[config.visitn_col]))
                    .attr('cy', d => y(d[config.value_col]))
                    .attr('r', '2px')
                    .attr('stroke', d => d.color)
                    .attr('fill', d => (d.color == '#999' ? 'transparent' : d.color))
                    .append('title')
                    .text(function(d) {
                        return (
                            'Value = ' + d[config.value_col] + ' @ Visit ' + d[config.visitn_col]
                        );
                    });
            });
    }
}
