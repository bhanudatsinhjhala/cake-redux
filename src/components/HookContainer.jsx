import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux/index';

function HookContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch()
  return (
    <div>
    <h2> Num Of IceCreams - {numOfIceCreams}</h2>
    <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default HookContainer