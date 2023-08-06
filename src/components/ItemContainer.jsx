import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';
function ItemContainer(props) {
    const numOfItems = useSelector((state) => {
        const itemState = props.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
        return itemState
    });
    const dispatch = useDispatch();
  return (
    <div>
        <h2> Num Of {props.cake ? 'Cake' : 'Ice-Cream'} - {numOfItems}</h2>
        <button onClick={() => dispatch(props.cake ? buyCake() : buyIceCream())}>Buy Items</button>
    </div>
  )
}

export default ItemContainer