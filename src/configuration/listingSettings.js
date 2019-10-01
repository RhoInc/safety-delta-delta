export default function listingSettings() {
    return {
        cols: ['key', 'spark', 'delta'],
        headers: ['Measure', '', 'Change over Time'],
        searchable: false,
        sortable: false,
        pagination: false,
        exportable: false
    };
}
