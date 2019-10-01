import './util/polyfills';
import './util/moveTo';
import configuration from './configuration/index';
import { createChart, createControls, createTable } from 'webcharts';
import callbacks from './callbacks/index';

//layout and styles
import defineLayout from './configuration/defineLayout';
import defineStyles from './configuration/defineStyles';

export default function safetyDeltaDelta(element = 'body', settings = {}) {
    //layout and styles
    defineLayout(element);
    defineStyles();

    //Define chart.
    const mergedSettings = Object.assign(
        {},
        JSON.parse(JSON.stringify(configuration.settings)),
        settings
    );
    const syncedSettings = configuration.syncSettings(mergedSettings);
    const syncedControlInputs = configuration.syncControlInputs(
        configuration.controlInputs(),
        syncedSettings
    );
    const controls = createControls(
        document.querySelector(element).querySelector('#sdd-controls'),
        {
            location: 'top',
            inputs: syncedControlInputs
        }
    );
    const chart = createChart(
        document.querySelector(element).querySelector('#sdd-chart'),
        syncedSettings,
        controls
    );

    //Define chart callbacks.
    for (const callback in callbacks)
        chart.on(callback.substring(2).toLowerCase(), callbacks[callback]);

    //listing
    const listing = createTable(
        document.querySelector(element).querySelector('#sdd-listing'),
        configuration.listingSettings()
    );
    listing.init([]);
    chart.listing = listing;

    return chart;
}
