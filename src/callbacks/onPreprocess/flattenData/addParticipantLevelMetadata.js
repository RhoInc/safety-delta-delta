import { merge } from 'd3';

export default function addParticipantLevelMetadata(d, participant_obj) {
    let varList = [];
    if (this.config.filters) {
        const filterVars = this.config.filters.map(d =>
            d.hasOwnProperty('value_col') ? d.value_col : d
        );
        varList = merge([varList, filterVars]);
    }
    if (this.config.group_cols) {
        const groupVars = this.config.group_cols.map(d =>
            d.hasOwnProperty('value_col') ? d.value_col : d
        );
        varList = merge([varList, groupVars]);
    }
    if (this.config.details) {
        const detailVars = this.config.details.map(d =>
            d.hasOwnProperty('value_col') ? d.value_col : d
        );
        varList = merge([varList, detailVars]);
    }

    varList.forEach(function(v) {
        participant_obj[v] = '' + d[0][v];
    });
}
