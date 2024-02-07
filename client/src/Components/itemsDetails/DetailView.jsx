import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../redux/actions/productsActions';

const DetailView = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id])
  return (
    <div>DetailView</div>
  )
}

export default DetailView