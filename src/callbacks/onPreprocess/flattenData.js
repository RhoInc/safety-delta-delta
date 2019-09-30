import { nest, sum, merge, max, min, format } from 'd3';
import addParticipantLevelMetadata from './flattenData/addParticipantLevelMetadata';

export default function flattenData(rawData) {
    var chart = this;
    var config = this.config;

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

            addParticipantLevelMetadata.call(chart, d, obj);

            return obj;
        })
        .entries(rawData);

    return nested.map(m => m.values);
}
