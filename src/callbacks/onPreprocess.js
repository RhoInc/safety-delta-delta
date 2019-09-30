import flattenData from './onPreprocess/flattenData';
import updateAxisSettings from './onPreprocess/updateAxisSettings';

export default function onPreprocess() {
    updateAxisSettings.call(this);
    this.raw_data = flattenData.call(this, this.initial_data);
}
