# Safety Delta-Delta Plot
[![Safety Delta-Delta animation](https://user-images.githubusercontent.com/3680095/67397935-51e39880-f580-11e9-8ff0-a6ae930745eb.gif)](https://rhoinc.github.io/safety-delta-delta/test-page/)

## Overview
Safety Delta Delta is a JavaScript library built with Webcharts ([1](https://github.com/RhoInc/Webcharts), [2](https://github.com/RhoInc/webcharts-wrapper-boilerplate)) that creates an interactive scatter plot showing relationships over time for lab measures, vital signs, and other measures related to safety in clinical trials. Click the animation above to try out an interactive demo of the chart. 

By default the chart expects [SDTM](http://www.cdisc.org/sdtm)-structured data, but can be configured for any dataset with one record per measurement.
View full chart configuration details [here](https://github.com/RhoInc/safety-delta-delta/wiki/Configuration).

In addition to standard groups and filters, users can also select time points and measurements to compare, and can click any participant to see all of thier lab values over time. See the documentation for all features [here](https://github.com/RhoInc/safety-histogram/wiki/Technical-Documentation).

## Typical Usage
In the simplest case, the chart can be created with a single line of code provided the input dataset meets the [default requirements](https://github.com/RhoInc/safety-delta-delta/wiki/Data-Guidelines):

```javascript
    safetyDeltaDelta().init(data);
```

Alternatively, the chart can be configured for a different data standard, such as for [ADaM](https://www.cdisc.org/standards/foundational/adam) in the example below:

```javascript
    const element = 'body'; // element in which to draw the chart
    const settings = {
        measure_col: 'PARAM',
        value_col: 'AVAL',
        id_col: 'USUBJID',
        normal_col_low: 'ANRLO',
        normal_col_high: 'ANRHI',
        filters: [
            {value_col: 'SEX'    , label: 'Sex'},
            {value_col: 'RACE'   , label: 'Race'},
            {value_col: 'ARM'    , label: 'Arm'},
            {value_col: 'AVISIT' , label: 'Visit'},
            {value_col: 'SITE'   , label: 'Site'},
        ],
    }; // custom chart settings

    d3.csv(
        'https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/adam/advs.csv', // data file location
        function(data) {
            safetyDeltaDelta(element, settings).init(data);
        }
    );
```

Click [here](https://rhoinc.github.io/safety-delta-delta/test-page/) to open an interactive example.

## Links 
- [Interactive Example](https://rhoinc.github.io/safety-delta-delta/test-page/)
- [Wiki](https://github.com/RhoInc/safety-delta-delta/wiki)
- [API](https://github.com/RhoInc/safety-delta-delta/wiki/API)
- [Configuration](https://github.com/RhoInc/safety-delta-delta/wiki/Configuration)
- [Data Guidelines](https://github.com/RhoInc/safety-delta-delta/wiki/Data-Guidelines)
- [Technical Documentation](https://github.com/RhoInc/safety-delta-delta/wiki/Technical-Documentation)
