export default function updateControlInputs() {
    console.log(this.config.measure);
    const x_control = this.controls.config.inputs.find(input => input.option === 'measure.x');
    x_control.values = this.measures;
    x_control.start = this.config.measure.x;

    const y_control = this.controls.config.inputs.find(input => input.option === 'measure.y');
    y_control.values = this.measures;
    y_control.start = this.config.measure.y;

    this.controls.config.inputs.find(
        input => input.option === 'visits.baseline'
    ).values = this.visits;
    this.controls.config.inputs.find(
        input => input.option === 'visits.comparison'
    ).values = this.visits;

    console.log(this.controls.config.inputs);
}
