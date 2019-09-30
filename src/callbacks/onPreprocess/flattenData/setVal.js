export default function setVal(e, params) {
    var visits = e.values.filter(function(f) {
        return params.visits.indexOf(f.key) !== -1;
    });
    var measures = visits.length
        ? merge(
              visits.map(function(m) {
                  return m.values
                      .filter(function(f) {
                          return f.key === config.measure;
                      })
                      .map(function(p) {
                          return +p.values.value;
                      });
              })
          )
        : [];

    var meas = null;
    var stat = measures && measures.length > 1 ? params.stat : 'def';
    var something = {
        mean: getMean(measures),
        max: max(measures),
        min: min(measures),
        def: measures[0]
    };
    meas = something[stat];
    return meas;
}
