export default function updateVisitControls() {
    const config = this.config;
    const baselineSelect = this.controls.wrap
        .selectAll('.control-group')
        .filter(f => f.option === 'visits.baseline')
        .select('select');
    baselineSelect
        .selectAll('option')
        .filter(f => this.config.visits.baseline.indexOf(f) > -1)
        .attr('selected', 'selected');

    const comparisonSelect = this.controls.wrap
        .selectAll('.control-group')
        .filter(f => f.option === 'visits.comparison')
        .select('select');
    comparisonSelect
        .selectAll('option')
        .filter(f => this.config.visits.comparison.indexOf(f) > -1)
        .attr('selected', 'selected');
}
