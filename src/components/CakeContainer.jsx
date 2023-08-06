/* eslint-disable react/prop-types */
import { buyCake } from "../redux/index";
import { useSelector, useDispatch } from "react-redux";
function CakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}
export default CakeContainer;
