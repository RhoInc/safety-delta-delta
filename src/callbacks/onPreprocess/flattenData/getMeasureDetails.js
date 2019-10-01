export default function getMeasureDetails(pt_data) {
    var config = this.config;
    var measure_details = d3
        .nest()
        .key(d => d[config.measure_col])
        .rollup(function(di) {
            var measure_obj = {};
            measure_obj.key = di[0][config.measure_col];
            measure_obj.raw = di;
            ['baseline', 'comparison'].forEach(function(t) {
                measure_obj[t + '_records'] = di.filter(
                    f => config.visits[t].indexOf(f[config.visit_col]) > -1
                );

                measure_obj[t + '_value'] = d3.mean(
                    measure_obj[t + '_records'],
                    d => d[config.value_col]
                );
            });
            measure_obj['delta'] = measure_obj.comparison_value - measure_obj.baseline_value;
            return measure_obj;
        })
        .entries(pt_data);
    return measure_details.map(m => m.values);
}
