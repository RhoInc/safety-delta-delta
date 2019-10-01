export default function showParticipantDetails(d) {
    var table = this;
    var chart = this.chart;
    var raw = d.raw[0];

    //show detail variables in a ul
    table.wrap.select('ul.pdd-pt-details').remove();
    var ul = table.wrap
        .insert('ul', '*')
        .attr('class', 'pdd-pt-details')
        .style('list-style', 'none')
        .style('padding', '0');

    var lis = ul
        .selectAll('li')
        .data(chart.config.details)
        .enter()
        .append('li')
        .style('', 'block')
        .style('display', 'inline-block')
        .style('text-align', 'center')
        .style('padding', '0.5em');

    lis.append('div')
        .text(d => d.label)
        .attr('div', 'label')
        .style('font-size', '0.8em');

    lis.append('div')
        .text(d => raw[d.value_col])
        .attr('div', 'value');
}
