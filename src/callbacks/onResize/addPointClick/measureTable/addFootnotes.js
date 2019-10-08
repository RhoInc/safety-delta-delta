export default function addFootnote() {
    this.wrap.select('span.footnote').remove();
    this.wrap
        .append('span')
        .attr('class', 'footnote')
        .style('font-size', '0.6em')
        .style('color', '#999')
        .text(
            'This table shows all lab values collected for the selected participant. Filled blue and orange circles indicate baseline and comparison visits respectively - all other visits are draw for reference using with empty gray circles. Change over time values greater than 0 are shown in green; values less than 0 shown in red.'
        );
}
