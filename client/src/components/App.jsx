import React from "react";
import Grids from "./Grids";
import SearchBar from "./SearchBar";
import Item from "./Item";
import Weapon from "../testingData";

function App() {
    return (
        <div>
            <Grids />
            <SearchBar />
            {Weapon.map((item => {
                return (
                    <Item 
                        src={item.id}
                        info={item.info}
                    />
                );
            }))}
        </div>
    );
}

export default App;