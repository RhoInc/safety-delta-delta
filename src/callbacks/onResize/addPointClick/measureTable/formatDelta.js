import { format } from 'd3';

export default function formatDelta() {
    this.tbody
        .selectAll('tr')
        .select('td.delta')
        .text(d => (isNaN(d.delta) ? 'NA' : format('+0.2f')(d.delta)))
        .style('color', d =>
            isNaN(d.delta) ? '#ccc' : d.delta > 0 ? 'green' : d.delta < 0 ? 'red' : '#999'
        );
}
