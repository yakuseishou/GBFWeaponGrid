import React, { useState, useEffect } from "react";
import Item from "./Item";
// import Weapon from "../testingData";


function ItemList(props) {
    // console.log(props.weapons);
    return (
        <div className="row">
            {props.weapons.map((item => {
                return (
                    <Item 
                        key={item.id}
                        info={item}
                    />
                );
            }))}
        </div>
    );

}

export default ItemList;