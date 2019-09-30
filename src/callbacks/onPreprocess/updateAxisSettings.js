export default function updateAxisSettings() {
    const config = this.config;

    //set config properties here since they aren't available in onInit
    config.x.column = 'delta_x';
    config.y.column = 'delta_y';
    config.marks[0].per = ['key'];

    config.x.label = 'Change in ' + config.measure.x;
    config.y.label = 'Change in ' + config.measure.y;
}
