export default function rendererSettings() {
    return {
        id_col: 'USUBJID',
        visit_col: 'VISIT',
        visitn_col: 'VISITNUM',
        measure_col: 'TEST',
        value_col: 'STRESN',
        filters: null,
        details: null,
        measure: {
            x: null,
            y: null
        },
        visits: {
            baseline: [],
            comparison: [],
            stat: 'mean'
        },
        add_regression_line: true
    };
}
