import cleanData from './onInit/cleanData';
import trimMeasures from './onInit/trimMeasures';
import checkFilters from './onInit/checkFilters';
import getMeasures from './onInit/getMeasures';
import getVisits from './onInit/getVisits';
import updateControlInputs from './onInit/updateControlInputs';
import initCustomEvents from './onInit/initCustomEvents';
import initSettings from './onInit/initSettings';

import { extent } from 'd3';

export default function onInit() {
    // 1. Remove invalid data.
    cleanData.call(this);

    // 2. trim measures.
    trimMeasures.call(this);

    // 3a Check filters against data.
    checkFilters.call(this);

    // 3b Get list of measures.
    getMeasures.call(this);

    // 3c Get list of visits.
    getVisits.call(this);

    //4a. Initialize the delta-delta settings &  Update control inputs.
    initSettings.call(this);
    updateControlInputs.call(this);

    //initialize custom events
    initCustomEvents.call(this);
}
