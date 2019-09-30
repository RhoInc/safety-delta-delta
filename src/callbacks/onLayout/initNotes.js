export default function initNotes() {
    //Add footnote element.
    this.wrap
        .insert('p', ':first-child')
        .attr('class', 'record-note')
        .style('text-align', 'center')
        .style('font-weight', 'bold')
        .text('Click a point to see details.');

    //Add header element in which to list visits at which measure is captured.
    this.wrap.append('p', 'svg').attr('class', 'possible-visits');

    //Add element for participant counts.
    this.controls.wrap
        .append('em')
        .classed('annote', true)
        .style('display', 'block');
}
