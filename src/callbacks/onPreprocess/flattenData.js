import { nest, format } from 'd3';
import addParticipantLevelMetadata from './flattenData/addParticipantLevelMetadata';
import getMeasureDetails from './flattenData/getMeasureDetails';

export default function flattenData(rawData) {
    const nested = nest()
        .key(d => d[this.config.id_col])
        .rollup(d => {
            const obj = {};
            obj.key = d[0][this.config.id_col];
            obj.raw = d;
            obj.measures = getMeasureDetails.call(this, d);

            obj.x_details = obj.measures.find(f => f.key == this.config.measure.x);
            obj.delta_x = obj.x_details ? obj.x_details.delta : null;
            obj.delta_x_rounded = obj.x_details ? format('0.3f')(obj.delta_x) : '';

            obj.y_details = obj.measures.find(f => f.key == this.config.measure.y);
            obj.delta_y = obj.y_details ? obj.y_details.delta : null;
            obj.delta_y_rounded = obj.y_details ? format('0.3f')(obj.delta_y) : '';

            addParticipantLevelMetadata.call(this, d, obj);

            return obj;
        })
        .entries(rawData);
    console.log(
        nested
            //.filter(d => d.values.x_details === undefined || d.values.y_details === undefined)
            .filter(d => (
                (d.values.x_details.baseline_value === undefined || d.values.x_details.comparison_value === undefined) ||
                (d.values.y_details.baseline_value === undefined || d.values.y_details.comparison_value === undefined)
            ))
    );

    return nested.map(m => m.values);
}
