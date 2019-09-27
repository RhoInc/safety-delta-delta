d3.csv(
    'https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/renderer-specific/adbds.csv',
    function(data) {
        var instance = safetyHistogram(
            '#container', // element
            {
                filters: [
                    {value_col: 'ARM', label: 'Treatment Group'},
                    {value_col: 'SITEID', label: 'Site ID'},
                    {value_col: 'USUBJID', label: 'Participant ID'},
                ],
                displayNormalRange: true,
            } // settings
        );
        //instance.init(data);
        webCharts.multiply(instance, data, "ARM")
    }
);
