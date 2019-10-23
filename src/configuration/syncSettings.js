export default function syncSettings(settings) {
    //handle a string argument to filters
    if (!(settings.filters instanceof Array))
        settings.filters = typeof settings.filters === 'string' ? [settings.filters] : [];

    //handle a string argument to details
    if (!(settings.details instanceof Array))
        settings.details = typeof settings.details === 'string' ? [settings.details] : [];

    //Define default details.
    let defaultDetails = [{ value_col: settings.id_col, label: 'Participant ID' }];
    if (Array.isArray(settings.filters))
        settings.filters
            .filter(filter => filter.value_col !== settings.id_col)
            .forEach(filter =>
                defaultDetails.push({
                    value_col: filter.value_col ? filter.value_col : filter,
                    label: filter.label
                        ? filter.label
                        : filter.value_col
                        ? filter.value_col
                        : filter
                })
            );

    //If [settings.details] is not specified:
    if (!settings.details) settings.details = defaultDetails;
    else {
        //If [settings.details] is specified:
        //Allow user to specify an array of columns or an array of objects with a column property
        //and optionally a column label.
        settings.details.forEach(detail => {
            if (
                defaultDetails
                    .map(d => d.value_col)
                    .indexOf(detail.value_col ? detail.value_col : detail) === -1
            )
                defaultDetails.push({
                    value_col: detail.value_col ? detail.value_col : detail,
                    label: detail.label
                        ? detail.label
                        : detail.value_col
                        ? detail.value_col
                        : detail
                });
        });
        settings.details = defaultDetails;
    }

    return settings;
}
