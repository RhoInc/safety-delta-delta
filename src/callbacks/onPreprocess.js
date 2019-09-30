import flattenData from './onPreprocess/flattenData';

export default function onPreprocess() {
    //set config properties here since they aren't available in onInit
    this.config.x.column = 'delta_x';
    this.config.y.column = 'delta_y';
    this.config.marks[0].per = ['key'];

    this.raw_data = flattenData.call(this, this.initial_data);
    console.log(this.raw_data);
}
