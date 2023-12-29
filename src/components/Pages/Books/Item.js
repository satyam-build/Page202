import React from 'react'
import './Item.css'
import {addToCart,} from '../../../redToolkit/CartSlice';
import { useDispatch } from 'react-redux';

function Item(props) {
    const dispatch = useDispatch()
  
    const handleAdd=(value)=>{
        // console.log(value);
        dispatch(addToCart(value));
        // store.dispatch(bookAdded(value));
    }
    return (
            
            <div className="pro" id='props1' key={props.id}>
                <img  src={`https://covers.openlibrary.org/b/id/${props.coverId}-M.jpg`} alt="Hello" loading='lazy' />
                <div className="des">
                    <span >{props.title}</span>
                    <h5 >{props.author}</h5>
                    <h5 >Edition : {props.editionNo}</h5>    
                    <h5>Published in {props.publishYear}</h5>                
                    <h4>Price : {props.price}Rs</h4>
                </div>
                <i onClick={() => handleAdd(props)} className="fa fa-shopping-cart cart"></i>
            </div>
      
    )
}

export default Item;