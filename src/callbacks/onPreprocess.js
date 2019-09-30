import flattenData from './onPreprocess/flattenData';

export default function onPreprocess() {
    this.raw_data = flattenData.call(this, this.initial_data);
    console.log(this.raw_data);
}
