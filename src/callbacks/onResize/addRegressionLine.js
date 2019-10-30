import regression from 'regression';
import { svg, format } from 'd3';

export default function addRegressionLine() {
    if (this.config.addRegressionLine) {
        var chart = this;
        var config = this.config;

        // map chart data to array and calculate regression using regression-js
        const arrayData = chart.filtered_data
            .filter(f => !isNaN(f.delta_x))
            .filter(f => !isNaN(f.delta_y))
            .map(d => [+d.delta_x, +d.delta_y]);

        const result = regression.linear(arrayData);

        //calculate predicted values for min and max points on the chart
        var min_x = chart.x_dom[0];
        var min_xy = result.predict(min_x);
        var max_x = chart.x_dom[1];
        var max_xy = result.predict(max_x);

        //draw the regression line
        var line = svg
            .line()
            .x(d => chart.x(d[0]))
            .y(d => chart.y(d[1]));
        chart.svg.selectAll('.regressionLine').remove();
        chart.svg
            .append('path')
            .classed('regressionLine', true)
            .datum([min_xy, max_xy])
            .attr('d', line)
            .attr('stroke', 'black')
            .attr('stroke-dasharray', '3,5');

        //add footnote with R2 and exact calculation
        chart.wrap.select('span.regressionNote').remove();
        chart.wrap
            .append('span')
            .attr('class', 'regressionNote')
            .style('font-size', '0.8em')
            .style('color', '#999')
            .html(
                'The dashed line shows the result of a simple linear regression. Additional details are shown below. <br> Equation: ' +
                    result.string +
                    '<br> R<sup>2</sup>: ' +
                    format('0.2f')(result.r2)
            );
    }
}
