import { nest, sum, merge, max, min, format } from 'd3';
import addParticipantLevelMetadata from './flattenData/addParticipantLevelMetadata';
import getMeasureDetails from './flattenData/getMeasureDetails';

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
            obj.measures = getMeasureDetails.call(chart, d);
            obj.x_details = obj.measures.find(f => f.key == config.measure.x);
            obj.y_details = obj.measures.find(f => f.key == config.measure.y);
            obj.delta_x = obj.x_details.delta;
            obj.delta_y = obj.y_details.delta;

            addParticipantLevelMetadata.call(chart, d, obj);

            return obj;
        })
        .entries(rawData);

    return nested.map(m => m.values);
}
