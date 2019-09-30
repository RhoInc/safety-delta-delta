export default function controlInputs() {
    return [
        {
            type: 'dropdown',
            values: [],
            label: 'Baseline visit(s)',
            option: 'visits.baseline',
            require: true,
            multiple: true
        },
        {
            type: 'dropdown',
            values: [],
            label: 'Comparison visit(s)',
            option: 'visits.comparison',
            require: true,
            multiple: true
        },
        {
            type: 'dropdown',
            values: [],
            label: 'X Measure',
            option: 'measure.x',
            require: true
        },
        {
            type: 'dropdown',
            values: [],
            label: 'Y Measure',
            option: 'measure.y',
            require: true
        }
    ];
}
