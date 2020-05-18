import React from "react";
import Item from "./Item";
import Weapon from "../testingData";

function ItemList(props) {
    return (
        <div className="row">
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

export default ItemList;