export default function defineStyles() {
    const styles = [
        '#safety-delta-delta {' + '    width: 100%;' + '    display: inline-block;' + '}',
        '.sdd-component {' +
            '    margin: 0;' +
            '    border: none;' +
            '    padding: 0;' +
            '    display: inline-block;' +
            '}',

        //controls
        '#sdd-controls {' + '    width: 25%;' + '    float: left;' + '}',
        '#sdd-controls .control-group {' +
            '    width: 98%;' +
            '    margin: 0 2% 5px 0;' +
            '    padding: 0;' +
            '}',
        '#sdd-controls .control-group > * {' + '    display: inline-block;' + '}',
        '#sdd-controls .changer {' + '    float: right;' + '    width: 50%;' + '}',
        '#sdd-controls .wc-control-label {' + '    text-align: right;' + '    width: 48%;' + '}',
        '#sdd-controls .annote {' + '    width: 98%;' + '    text-align: right;' + '}',

        //chart
        '#sdd-chart {' + '    width: 36%;' + '    margin: 0 2%;' + '}',

        //listing
        '#sdd-listing {' + '    width: 35%;' + '    float: right;' + '}',
        '#sdd-listing .wc-table table {' + '    width: 100%;' + '    display: table;' + '}',
        '#sdd-listing .wc-table th:not(:first-child),' +
            '#sdd-listing .wc-table td:not(:first-child) {' +
            '    text-align: right;' +
            '}',
        '.sdd-axisLabel{' +
            'font-size:75%;' +
            'border-radius:0.25em;' +
            'padding:.2em .6em .3em;' +
            'margin-right:0.4em;' +
            'background-color:#5bc0de;' +
            'color:white;' +
            'font-weight:700;' +
            '}'
    ];
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styles.join('\n');
    document.getElementsByTagName('head')[0].appendChild(style);
}
