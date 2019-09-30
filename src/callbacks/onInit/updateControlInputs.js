export default function updateControlInputs() {
    console.log(this.config.measure);
    const x_control = this.controls.config.inputs.find(input => input.option === 'measure.x');
    x_control.values = this.measures;
    x_control.start = this.config.measure.x;

    const y_control = this.controls.config.inputs.find(input => input.option === 'measure.y');
    y_control.values = this.measures;
    y_control.start = this.config.measure.y;

    const baseline_control = this.controls.config.inputs.find(
        input => input.option === 'visits.baseline'
    );
    baseline_control.values = this.visits;
    baseline_control.start = this.config.visits.baseline;

    const comparison_control = this.controls.config.inputs.find(
        input => input.option === 'visits.comparison'
    );
    comparison_control.values = this.visits;
    comparison_control.start = this.config.visits.comprarison;

    console.log(this.controls.config.inputs);
}
