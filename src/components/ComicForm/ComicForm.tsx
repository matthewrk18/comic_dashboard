import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { choosePublisher } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface ComicFormProps {
    id?:string;
    data?:{}
}

interface ComicState {
    publisher: string;
    title: string;
}

export const ComicForm = (props:ComicFormProps) => {
    const dispatch = useDispatch();
    let { comicData, getData } = useGetData();
    const store = useStore();
    const publisher = useSelector<ComicState>(state => state.publisher)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(choosePublisher(data.publisher))
            await server_calls.create(store.getState())
            console.log(`created new comic ${data.name}, ${store.getState()}`)
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="publisher">Publisher</label>
                    <Input {...register('publisher')} name="publisher" placeholder="Publisher" />
                </div> 
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name="title" placeholder="Title" />
                </div> 
                <div>
                    <label htmlFor="volume_num">Volume</label>
                    <Input {...register('volume_num')} name="volume_num" placeholder="Volume" />
                </div> 
                <div>
                    <label htmlFor="issue_num">Issue</label>
                    <Input {...register('issue_num')} name="issue_num" placeholder="Issue" />
                </div> 
                <div>
                    <label htmlFor="print_num">Print</label>
                    <Input {...register('print_num')} name="print_num" placeholder="Print" />
                </div> 
                <div>
                    <label htmlFor="cover_date">Cover Date</label>
                    <Input {...register('cover_date')} name="cover_date" placeholder="Cover Date"/>
                </div>
                <div>
                    <label htmlFor="cover_price">Cover Price</label>
                    <Input {...register('cover_price')} name="cover_price" placeholder="Cover Price" />
                </div> 
                <div>
                    <label htmlFor="condition">Condition</label>
                    <Input {...register('condition')} name="condition" placeholder="Condition" />
                </div> 
                <div>
                    <label htmlFor="comments">Comments</label>
                    <Input {...register('comments')} name="comments" placeholder="Comments" />
                </div> 
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}