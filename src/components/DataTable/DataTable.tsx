import { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle} from '@material-ui/core';
import { ComicForm } from '../../components/ComicForm';


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
    width: 120
    },
    {
    field: 'issue_num',
    headerName: 'Issue #',
    width: 115
    },
    {
    field: 'print_num',
    headerName: 'Print #',
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


interface gridData{
    data:{
        id?:string;
    }
}

export const DataTable = () =>{
    let { comicData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data: {}})
    const [selectionModel, setSelectionModel] = useState<any>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = async () => {
        await server_calls.delete(selectionModel)
        getData()
        console.log('deleted selection!', selectionModel)
    }

        return (
            <div style={{ height: 400, width: '100%' }}>
            <h2> Comics in Inventory</h2>
            <DataGrid 
                rows={comicData} 
                columns={columns} 
                pageSize={5} 
                checkboxSelection 
                onSelectionModelChange ={ (item) => {
                setSelectionModel(item)
                }}
                {...comicData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update a Comic</DialogTitle>
                <DialogContent>
                <DialogContentText>comic id: {selectionModel}</DialogContentText>
                <ComicForm id={`${selectionModel}`} />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button> 
                <Button onClick={handleClose} color="primary">Done</Button> 
                </DialogActions>
            </Dialog>
            </div>
        )
    }

/*
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
*/
