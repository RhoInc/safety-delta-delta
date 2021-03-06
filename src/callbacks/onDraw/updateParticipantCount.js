/*------------------------------------------------------------------------------------------------\
  Annotate number of participants based on current filters, number of participants in all, and
  the corresponding percentage.

  Inputs:

    chart - a webcharts chart object
    id_unit - a text string to label the units in the annotation (default = 'participants')
    selector - css selector for the annotation
\------------------------------------------------------------------------------------------------*/

import { set, format, select } from 'd3';

export default function updateParticipantCount(chart, selector, id_unit) {
    //count the number of unique ids in the data set
    const totalObs = set(chart.initial_data.map(d => d[chart.config.id_col])).values().length;

    //count the number of unique ids in the current chart and calculate the percentage
    const currentObs = chart.filtered_data.filter(
        f => !isNaN(f.delta_x) && f.delta_x !== null && !isNaN(f.delta_y) && f.delta_y !== null
    ).length; // TODO: remove these records as part of the data flow

    const percentage = format('0.1%')(currentObs / totalObs);

    //clear the annotation
    let annotation = select(selector);
    annotation.selectAll('*').remove();

    //update the annotation
    const units = id_unit ? ' ' + id_unit : ' participant(s)';
    annotation.text(currentObs + ' of ' + totalObs + units + ' shown (' + percentage + ')');
}
