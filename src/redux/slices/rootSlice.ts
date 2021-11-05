import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        publisher: ' Marvel',
        title: "Fantastic Four",
        volume_num: "1",
        issue_num: "1",
        print_num: "1",
        cover_date: '10/2/1982',
        cover_price: '.30',
        condition: 'Fair',
        comments: 'None'
    },
    reducers: {
        choosePublisher: (state, action) => { state.publisher = action.payload },
        // chooseTitle: (state, action) => { state.title = action.payload}
    }
})

//Export Reducer
export const reducer = rootSlice.reducer;
export const { choosePublisher } = rootSlice.actions;