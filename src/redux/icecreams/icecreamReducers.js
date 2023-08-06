import { ICE_CREAM } from "./icecreamTypes";

const initalState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initalState, action) => {
  switch (action.type) {
    case ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
