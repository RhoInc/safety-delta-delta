The most straightforward way to customize the Safety Delta-Delta plot is by using a configuration object whose properties describe the behavior and appearance of the chart. Since the Safety Histogram is a Webcharts `chart` object, many default Webcharts settings are set in the [webchartsSettings.js file](https://github.com/RhoInc/safety-delta-delta/blob/master/src/configuration/webchartsSettings.js) as [described below](#webcharts-settings). Refer to the [Webcharts documentation](https://github.com/RhoInc/Webcharts/wiki/Chart-Configuration) for more details on these settings.

In addition to the standard Webcharts settings several custom settings not available in the base Webcharts library have been added to the Safety Delta-Delta plot to facilitate data mapping and other custom functionality. These custom settings are described in detail below. All defaults can be overwritten by users.

# Renderer-specific settings
The sections below describe each safety-delta-delta setting as of version 1.0.0.

## settings.measure_col
`string`

a variable that contains the names of each medical sign

**default:** `"TEST"`



## settings.value_col
`string`

a variable that contains the results for each medical sign; non-numeric results are removed with a notification thrown to the log

**default:** `"STRESN"`



## settings.id_col
`string`

a variable that contains IDs for each participant

**default:** `"USUBJID"`



## settings.visit_col
`string`

a variable that contains the categorical visit where the measure was collected

**default:** `"VISIT"`



## settings.visitn_col
`string`

a variable that contains the numeric visit where the measure was collected

**default:** `"VISITN"`



## settings.measure
`object`

Measures to be used in delta-delta scatter plot. Must be a value of the `settings.measure_value` column

### settings.measure.x
`string`

Measure to be shown on the x-axis of the delta-delta plot

**default:** none

### settings.measure.y
`string`

Measure to be shown on the y-axis of the delta-delta plot

**default:** none



## settings.addRegressionLine
`boolean`

Indicates whether a regression line should be drawn on the delta-delta scatter plot

**default:** `false`



## settings.visits
`object`



### settings.visits.x
`string`

Measure to be shown on the x-axis of the delta-delta plot

**default:** none

### settings.visits.y
`string`

Measure to be shown on the y-axis of the delta-delta plot

**default:** none



## settings.filters
`array`

an array of variables and metadata that will appear in the controls as data filters

**default:** none

### settings.filters[].label
`string`

a description of the variable

**default:** none

### settings.filters[].value_col
`string`

the name of the variable

**default:** none



## settings.details
`array`

an array of variables and metadata that will appear in the data listing

**default:** none

### settings.details[].label
`string`

a description of the variable

**default:** none

### settings.details[].value_col
`string`

the name of the variable

**default:** none



# Webcharts settings
The object below contains Webcharts settings that define the safety-histogram chart as of version 1.0.0 of the Safety Delta Delta.

```
{
    "x": {
        "column": null,
        "type": "linear",
        "label": "x delta",
        "format": "0.2f"
    },
    "y": {
        "column": null,
        "type": "linear",
        "label": "y delta",
        "behavior": "flex",
        "format": "0.2f"
    },
    "marks": [
        {
            "type": "circle",
            "per": null,
            "radius": 4,
            "attributes": {
                "stroke-width": 0.5,
                "fill-opacity": 0.8
            },
            "tooltip": "Subject ID: [key]\nX Delta: [delta_x_rounded]\nY Delta: [delta_y_rounded]"
        }
    ],
    "gridlines": "xy",
    "resizable": false,
    "margin": {
        "right": 25,
        "top": 25
    },
    "aspect": 1,
    "width": 400
}
```