import React from "react";
import Grids from "./Grids";
import SearchBar from "./SearchBar";
import ItemList from "./itemList/ItemList";


function App() {
    return (
        <div>
            <Grids />
            <SearchBar />
            <ItemList />
        </div>
    );
}

export default App;