d3.csv(
    'https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/renderer-specific/adbds.csv',
    function(data) {
        var instance = safetyDeltaDelta(
            '#container', // element
            {
                filters: [
                  //  {value_col: 'ARM', label: 'Treatment Group'},
                  //  {value_col: 'SITE', label: 'Site ID'},
                  //  {value_col: 'USUBJID', label: 'Participant ID'},
                ],
                displayNormalRange: true,
            } // settings
        );
        instance.init(data);
    }
);
