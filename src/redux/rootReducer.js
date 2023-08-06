import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecreams/icecreamReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducers;
