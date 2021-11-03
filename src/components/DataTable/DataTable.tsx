import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
    field: 'publisher',
    headerName: 'Publisher',
    width: 150
    },
    {
    field: 'title',
    headerName: 'Title',
    width: 150
    },
    {
    field: 'volume_num',
    headerName: 'Volume #',
    type: 'number',
    width: 120
    },
    {
    field: 'issue_num',
    headerName: 'Issue #',
    type: 'number',
    width: 110
    },
    {
    field: 'print_num',
    headerName: 'Print #',
    type: 'number',
    width: 110
    },
    {
    field: 'cover_date',
    headerName: 'Cover Date',
    width: 110
    },
    {
    field: 'cover_price',
    headerName: 'Cover Price',
    type: 'number',
    width: 110
    },
    {
    field: 'condition',
    headerName: 'Condition',
    width: 110
    },
    {
    field: 'comments',
    headerName: 'Comments',
    width: 160
    },
];

const rows = [
    { id: 1, publisher: 'Marvel', title: 'Iron Man', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 2, publisher: 'Marvel', title: 'Spider Man', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 3, publisher: 'Marvel', title: 'Captain America', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 4, publisher: 'Marvel', title: 'Captain Marvel', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 5, publisher: 'DC', title: 'Flash', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 6, publisher: 'DC', title: 'Superman', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 7, publisher: 'DC', title: 'Batman', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 8, publisher: 'DC', title: 'Green Lantern', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
    { id: 9, publisher: 'DC', title: 'Harvey', volume_num: 1, issue_num: 1, print_num: 1, cover_date: "1/1/99", cover_price: 2.25, condition: "good", comments: "none",},
];



export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Comics in my collection</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}