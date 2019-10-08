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
                const cell = d3
                        .select(this)
                        .select('td.spark')
                        .classed('minimized', true)
                        .text(''),
                    toggle = d3
                        .select(this)
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

                var x = d3.scale
                    .linear()
                    .domain(d3.extent(overTime, m => +m[config.visitn_col]))
                    .range([offset, width - offset]);

                //y-domain includes 99th population percentile + any participant outliers
                var y = d3.scale
                    .linear()
                    .domain(d3.extent(overTime, m => +m[config.value_col]))
                    .range([height - offset, offset]);

                //render the svg
                var svg = cell
                    .append('svg')
                    .attr({
                        width: width,
                        height: height
                    })
                    .append('g');

                //draw lines at the population guidelines
                /*
                svg.selectAll('lines.guidelines')
                    .data(row_d.population_extent)
                    .enter()
                    .append('line')
                    .attr('class', 'guidelines')
                    .attr('x1', 0)
                    .attr('x2', width)
                    .attr('y1', d => y(d))
                    .attr('y2', d => y(d))
                    .attr('stroke', '#ccc')
                    .attr('stroke-dasharray', '2 2');
                */

                //draw the sparkline
                var draw_sparkline = d3.svg
                    .line()
                    .interpolate('linear')
                    .x(d => x(d[config.visitn_col]))
                    .y(d => y(d[config.value_col]));
                var sparkline = svg
                    .append('path')
                    .datum(overTime)
                    .attr({
                        class: 'sparkLine',
                        d: draw_sparkline,
                        fill: 'none',
                        stroke: '#999'
                    });

                //draw baseline values

                var baseline_circles = svg
                    .selectAll('circle')
                    .data(overTime)
                    .enter()
                    .append('circle')
                    .attr('class', 'circle outlier')
                    .attr('cx', d => x(d[config.visitn_col]))
                    .attr('cy', d => y(d[config.value_col]))
                    .attr('r', '2px')
                    .attr('stroke', d => d.color)
                    .attr('fill', d => (d.color == '#999' ? 'none' : d.color));
            });
    }
}
