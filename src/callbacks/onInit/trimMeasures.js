export default function trimMeasures() {
    this.initial_data.forEach(d => {
        d[this.config.measure_col] = d[this.config.measure_col].trim();
    });
}
