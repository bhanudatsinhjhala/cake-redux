import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HookContainer from "./components/HookContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <>
        <ItemContainer cake />
        <ItemContainer icecream />
        <CakeContainer />
        <HookContainer />
        <NewCakeContainer />
      </>
    </Provider>
  );
}

export default App;

