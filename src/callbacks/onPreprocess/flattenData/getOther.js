export default function getOther(e) {
    config.details.forEach(function(g) {
        e[g.col] = e.values[0].values[0].values.raw[g.col];
    });
}
