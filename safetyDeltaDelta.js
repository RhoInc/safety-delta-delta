(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? (module.exports = factory(require('d3'), require('webcharts')))
        : typeof define === 'function' && define.amd
        ? define(['d3', 'webcharts'], factory)
        : (global.safetyDeltaDelta = factory(global.d3, global.webCharts));
})(this, function(d3, webcharts) {
    'use strict';

    if (typeof Object.assign != 'function') {
        Object.defineProperty(Object, 'assign', {
            value: function assign(target, varArgs) {
                if (target == null) {
                    // TypeError if undefined or null
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource != null) {
                        // Skip over if undefined or null
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }

                return to;
            },
            writable: true,
            configurable: true
        });
    }

    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            value: function value(predicate) {
                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, 'length')).
                var len = o.length >>> 0;

                // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }

                // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                var thisArg = arguments[1];

                // 5. Let k be 0.
                var k = 0;

                // 6. Repeat, while k < len
                while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, � kValue, k, O �)).
                    // d. If testResult is true, return kValue.
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return kValue;
                    }
                    // e. Increase k by 1.
                    k++;
                }

                // 7. Return undefined.
                return undefined;
            }
        });
    }

    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, 'findIndex', {
            value: function value(predicate) {
                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;

                // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }

                // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                var thisArg = arguments[1];

                // 5. Let k be 0.
                var k = 0;

                // 6. Repeat, while k < len
                while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, � kValue, k, O �)).
                    // d. If testResult is true, return k.
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return k;
                    }
                    // e. Increase k by 1.
                    k++;
                }

                // 7. Return -1.
                return -1;
            }
        });
    }

    Math.log10 = Math.log10 =
        Math.log10 ||
        function(x) {
            return Math.log(x) * Math.LOG10E;
        };

    // https://github.com/wbkd/d3-extended
    d3.selection.prototype.moveToFront = function() {
        return this.each(function() {
            this.parentNode.appendChild(this);
        });
    };

    d3.selection.prototype.moveToBack = function() {
        return this.each(function() {
            var firstChild = this.parentNode.firstChild;
            if (firstChild) {
                this.parentNode.insertBefore(this, firstChild);
            }
        });
    };

    function rendererSettings() {
        return {
            //required variables
            measure_col: 'TEST',
            value_col: 'STRESN',

            //optional variables
            id_col: 'USUBJID',
            unit_col: 'STRESU',
            normal_col_low: 'STNRLO',
            normal_col_high: 'STNRHI',
            filters: null,
            details: null
        };
    }

    function webchartsSettings() {
        return {};
    }

    function syncSettings(settings) {
        //handle a string argument to filters
        if (!(settings.filters instanceof Array))
            settings.filters = typeof settings.filters === 'string' ? [settings.filters] : [];

        //handle a string argument to details
        if (!(settings.details instanceof Array))
            settings.details = typeof settings.details === 'string' ? [settings.details] : [];

        //Define default details.
        var defaultDetails = [{ value_col: settings.id_col, label: 'Participant ID' }];
        if (Array.isArray(settings.filters))
            settings.filters
                .filter(function(filter) {
                    return filter.value_col !== settings.id_col;
                })
                .forEach(function(filter) {
                    return defaultDetails.push({
                        value_col: filter.value_col ? filter.value_col : filter,
                        label: filter.label
                            ? filter.label
                            : filter.value_col
                            ? filter.value_col
                            : filter
                    });
                });
        defaultDetails.push({ value_col: settings.value_col, label: 'Result' });
        if (settings.normal_col_low)
            defaultDetails.push({
                value_col: settings.normal_col_low,
                label: 'Lower Limit of Normal'
            });
        if (settings.normal_col_high)
            defaultDetails.push({
                value_col: settings.normal_col_high,
                label: 'Upper Limit of Normal'
            });

        //If [settings.details] is not specified:
        if (!settings.details) settings.details = defaultDetails;
        else {
            //If [settings.details] is specified:
            //Allow user to specify an array of columns or an array of objects with a column property
            //and optionally a column label.
            settings.details.forEach(function(detail) {
                if (
                    defaultDetails
                        .map(function(d) {
                            return d.value_col;
                        })
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

    function controlInputs() {
        return [];
    }

    function syncControlInputs(controlInputs, settings) {
        //Add filters to default controls.
        if (Array.isArray(settings.filters) && settings.filters.length > 0) {
            settings.filters.forEach(function(filter) {
                var filterObj = {
                    type: 'subsetter',
                    value_col: filter.value_col || filter,
                    label: filter.label || filter.value_col || filter
                };
                controlInputs.push(filterObj);
            });
        }
        return controlInputs;
    }

    var configuration = {
        rendererSettings: rendererSettings,
        webchartsSettings: webchartsSettings,
        settings: Object.assign({}, rendererSettings(), webchartsSettings()),
        syncSettings: syncSettings,
        controlInputs: controlInputs,
        syncControlInputs: syncControlInputs
    };

    function onInit() {}

    function onLayout() {}

    function onPreprocess() {}

    function onDatatransform() {}

    function onDraw() {}

    function onResize() {}

    function onDestroy() {}

    var callbacks = {
        onInit: onInit,
        onLayout: onLayout,
        onPreprocess: onPreprocess,
        onDatatransform: onDatatransform,
        onDraw: onDraw,
        onResize: onResize,
        onDestroy: onDestroy
    };

    function safetyHistogram() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        //Define chart.
        var mergedSettings = Object.assign(
            {},
            JSON.parse(JSON.stringify(configuration.settings)),
            settings
        );
        var syncedSettings = configuration.syncSettings(mergedSettings);
        var syncedControlInputs = configuration.syncControlInputs(
            configuration.controlInputs(),
            syncedSettings
        );
        var controls = webcharts.createControls(element, {
            location: 'top',
            inputs: syncedControlInputs
        });
        var chart = webcharts.createChart(element, syncedSettings, controls);

        //Define chart callbacks.
        for (var callback in callbacks) {
            chart.on(callback.substring(2).toLowerCase(), callbacks[callback]);
        }
        return chart;
    }

    return safetyHistogram;
});
