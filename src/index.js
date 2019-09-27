import './util/polyfills';
import './util/moveTo';
import configuration from './configuration/index';
import { createChart, createControls, createTable } from 'webcharts';
import callbacks from './callbacks/index';

export default function safetyHistogram(element = 'body', settings = {}) {
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
    const controls = createControls(element, {
        location: 'top',
        inputs: syncedControlInputs
    });
    const chart = createChart(element, syncedSettings, controls);

    //Define chart callbacks.
    for (const callback in callbacks)
        chart.on(callback.substring(2).toLowerCase(), callbacks[callback]);

    return chart;
}
