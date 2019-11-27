import { select } from 'd3';

export default function layout(element) {
    const container = select(element);
    container
        .append('div')
        .classed('sdd-component', true)
        .attr('id', 'sdd-controls');
    container
        .append('div')
        .classed('sdd-component', true)
        .attr('id', 'sdd-chart');
    container
        .append('div')
        .classed('sdd-component', true)
        .attr('id', 'sdd-listing');
}
