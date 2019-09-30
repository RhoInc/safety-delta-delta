export default function reset() {
    console.log(this.listing);
    this.svg.selectAll('g.boxplot').remove();
    this.svg
        .selectAll('g.point')
        .classed('selected', false)
        .select('circle')
        .style('fill', this.config.colors[0]);
    this.wrap
        .select('.record-note')
        .style('text-align', 'center')
        .text('Click a point to see details.');
    this.svg.select('line.identity').remove();
    this.listing.draw([]);
    this.listing.wrap.style('display', 'none');
}
