import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Item from "./Item";


function ItemList(props) {

    const selectedWeapon = useSelector(state => state.selectedWeapon);
    const dispatch = useDispatch();
    
    function handleCheck(event) {
        const { name, src } = event.target;

        dispatch({
            type: "WEAPON_SELECTED",
            payload: {
              name: name,
              src: src
            }
          });  
    }

    return (
        <div className="row">
            {props.weapons.map((item => {
                return (
                    <Item 
                        key={item.id}
                        id={item.id}
                        info={item}
                        checked={selectedWeapon.weaponId}
                        handleCheck={handleCheck}
                    />
                );
            }))}
        </div>
    );

}

export default ItemList;