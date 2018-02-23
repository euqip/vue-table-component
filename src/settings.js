const settings = {
    tableClass: '',
    theadClass: '',
    tbodyClass: '',
    headerClass: '',
    cellClass: '',
    filterInputClass: '',
    tablesortable: true,
    filterPlaceholder: 'Filter table…',
    filterNoResults: 'There are no matching rows',
    tableNotSorted: 'Table not sorted',
    tableSortedBy: 'Table sorted by',
    asc: 'ascending',
    desc: 'descending',
};

export function mergeSettings(newSettings) {
    for (const setting in newSettings) {
        settings[setting] = newSettings[setting];
    }
}

export default settings;
