export default function webchartsSettings() {
    return {
        x: {
            column: null,
            type: 'linear',
            label: 'x delta',
            format: '0.2f'
        },
        y: {
            column: null,
            type: 'linear',
            label: 'y delta',
            behavior: 'flex',
            format: '0.2f'
        },
        marks: [
            {
                type: 'circle',
                per: null,
                radius: 4,
                attributes: {
                    'stroke-width': 0.5,
                    'fill-opacity': 0.8
                },
                tooltip: 'Subject ID: [key]\nX Delta: [delta_x_rounded]\nY Delta: [delta_y_rounded]'
            }
        ],
        gridlines: 'xy',
        resizable: false,
        margin: { right: 25, top: 25 },
        aspect: 1,
        width: 400
    };
}
