d3.csv(
    'https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/renderer-specific/adbds.csv',
    function(data) {
        var instance = safetyDeltaDelta(
            '#container', // element
            {
                id_col: 'USUBJID',
                visit_col: 'VISIT',
                visitn_col: 'VISITNUM',
                measure_col: 'TEST',
                value_col: 'STRESN',
                filters: [
                    {value_col: 'ARM', label: 'Treatment Group'},
                    {value_col: 'SITE', label: 'Site ID'},
                    {value_col: 'USUBJID', label: 'Participant ID'},
                ],
                details: null,
                measure: {
                    x: 'Total Bilirubin',
                    y: 'Aminotransferase, aspartate (AST)'
                },
                visits: {
                    baseline: [],
                    comparison: [],
                    stat: 'mean'
                },
                addRegressionLine: true
            } // settings
        );
        instance.init(data);
    }
);
