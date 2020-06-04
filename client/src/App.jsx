import React, {useState, useEffect} from "react";
import Grids from "./components/Grids";
import Search from "./components/Search";

import {Provider} from "react-redux";
import store from "./store";

function App() {
  const [listSelected, setlistSelected] = useState(false);
  const [gridSelected, setGridSelected] = useState(false);
  const [selectedId, setselectedId] = useState("");

  function handleList(id) {
    (listSelected) ? setselectedId("") : setselectedId(id);
    setlistSelected(!listSelected);
  }

  function handleGrid() {
    setGridSelected(!false);
  }

  return (
    <Provider store={store}>
      <div>
        <Grids 
          listSelected={listSelected}
          selectedId={selectedId}
          gridSelected={gridSelected}
          handleGrid={handleGrid}
        />
        <Search 
          setlistSelected={handleList}
        />
      </div>
      </Provider>
  );
}

export default App;