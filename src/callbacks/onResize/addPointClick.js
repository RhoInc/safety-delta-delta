export default function addPointClick() {
    var chart = this;
    var config = this.config;
    var points = this.marks[0].circles;

    points.on('click', function(d) {
        const point_data = d.values.raw[0];
        console.log(point_data);
        chart.listing.wrap.style('display', null);
        chart.listing.draw(point_data.measures);
    });
}
