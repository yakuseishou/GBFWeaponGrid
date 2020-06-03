import React, { useState } from "react";
import Item from "./Item";
// import Weapon from "../testingData";


function ItemList(props) {
    const [checked, setChecked] = useState("");


    function handleCheck(event) {
            const { name } = event.target;
            (checked === name) ? setChecked("") : setChecked(name);
    }
    
    return (
        <div className="row">
            {props.weapons.map((item => {
                return (
                    <Item 
                        key={item.id}
                        id={item.id}
                        info={item}
                        checked={checked}
                        handleCheck={handleCheck}
                    />
                );
            }))}
        </div>
    );

}

export default ItemList;