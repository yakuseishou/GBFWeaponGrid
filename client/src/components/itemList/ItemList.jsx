import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Item from "./Item";


function ItemList(props) {

    const selectedWeapon = useSelector(state => state.selectedWeapon);
    const gridSelectedWeapon = useSelector(state => state.gridSelectedWeapon);

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
        if (!selectedWeapon.selected && gridSelectedWeapon.selected) {
            dispatch({
                type: "GRIDWEAPON_UPDATE",
                payload: {
                    weaponGridId: gridSelectedWeapon.weaponGridId,
                    weaponInfo: {
                        weaponId: name,
                        imgurl: src
                    }
                }
            });
            dispatch({type: "RESET_SELECTEDGRIDWEAPON"});
            dispatch({type: "RESET_SELECTEDWEAPON"});
        }  
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