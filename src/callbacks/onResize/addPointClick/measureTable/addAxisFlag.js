export default function addAxisFlag() {
    var table = this;
    ['X', 'Y'].forEach(function(axis) {
        const cell = table.tbody
            .selectAll('tr')
            .filter(d => d.axisFlag == axis)
            .select('td.key')
            .text('');

        cell.append('span')
            .attr('class', 'sdd-axisLabel')
            .text(axis + '-axis');

        cell.append('span').text(d => d.key);
    });
}
