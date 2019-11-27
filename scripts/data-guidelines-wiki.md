The Safety Delta-Delta plot accepts [JSON](https://en.wikipedia.org/wiki/JSON) data of the format returned by [`d3.csv()`](https://github.com/d3/d3-3.x-api-reference/blob/master/CSV.md). The renderer visualizes clinical medical signs data with **one row per measurement** plus the required variables specified below.

## Data structure
one record per measurement

## Data specification
required and optional variables:

| Setting | Default | Data Type | Description | Required? |
|:--------|:--------|:----------|:------------|:---------:|
|`measure_col`|_TEST_|**character**|a variable that contains the names of each medical sign|**Yes**|
|`value_col`|_STRESN_|**numeric**|a variable that contains the results for each medical sign; non-numeric results are removed with a notification thrown to the log|**Yes**|
|`id_col`|_USUBJID_|**character**|a variable that contains IDs for each participant|**Yes**|
|`visit_col`|_VISIT_|**character**|a variable that contains the categorical visit where the measure was collected|**Yes**|
|`visitn_col`|_VISITN_|**character**|a variable that contains the numeric visit where the measure was collected|**Yes**|
|`filters[]`||**either**|an array of variables and metadata that will appear in the controls as data filters||
|`details[]`||**either**|an array of variables and metadata that will appear in the data listing||