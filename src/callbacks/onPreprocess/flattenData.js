import { nest, sum, merge, max, min, format } from 'd3';

export default function flattenData(rawData) {
    console.log(rawData);
    var config = this.config;
    console.log(config);
    console.log(config.visits);
    console.log(config.measure);
    var nested = nest()
        .key(function(d) {
            return d[config.id_col];
        })
        .rollup(function(d) {
            var obj = {};
            obj.key = d[0][config.id_col];
            obj.raw = d;
            ['x', 'y'].forEach(function(m) {
                obj[m + '_measure'] = config.measure[m];
                const measure_values = d.filter(f => f[config.measure_col] == obj[m + '_measure']);
                obj[m + '_measure_values'] = measure_values;
                ['baseline', 'comparison'].forEach(function(t) {
                    obj[m + '_' + t + '_records'] = measure_values.filter(
                        f => config.visits[t].indexOf(f[config.visit_col]) > -1
                    );
                    obj[m + '_' + t + '_value'] = d3.mean(
                        obj[m + '_' + t + '_records'],
                        d => d[config.value_col]
                    );
                });
                obj['delta_' + m] = obj[m + '_comparison_value'] - obj[m + '_baseline_value'];
            });
            return obj;
        })
        .entries(rawData);

    //TODO get other variables (filters, details etc)

    return nested.map(m => m.values);
}
