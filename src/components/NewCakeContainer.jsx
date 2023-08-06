import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";
function NewCakeContainer() {
  const dispatch = useDispatch();
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
    </div>
  );
}

export default NewCakeContainer;
