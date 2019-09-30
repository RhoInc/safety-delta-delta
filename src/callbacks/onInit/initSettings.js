export default function initSettings() {
    //Set initial measures.
    this.config.measure.x = this.config.measure.x || this.measures[0];

    //  this.config.x.column = this.config.measure.x;
    this.config.measure.y = this.config.measure.y || this.measures[1];

    //  this.config.y.column = this.config.measure.y;
    //Set baseline and comparison visits.
    this.config.visits.baseline =
        this.config.visits.baseline.length > 0 ? this.config.visits.baseline : [this.visits[0]];

    this.config.visits.comparison =
        this.config.visits.comparison.length > 0
            ? this.config.visits.comparison
            : [this.visits[this.visits.length - 1]];
}
