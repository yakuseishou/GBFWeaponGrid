import React, {useState} from "react";
import MainWeapon from "./MainWeapon";
import SubWeaponsBox from "./SubWeaponsBox";
import { useSelector, useDispatch } from 'react-redux';

function WeaponGrid() {

    const gridWeapons = useSelector(state => state.weaponGrid);
    const selectedWeapon = useSelector(state => state.selectedWeapon);
    const gridSelectedWeapon = useSelector(state => state.gridSelectedWeapon);

    const dispatch = useDispatch();

    function handleSelect(event) {
        const { name } = event.target;

        dispatch({type: "GRIDWEAPON_SELECTED", payload: name});
        if (selectedWeapon.selected && !gridSelectedWeapon.selected) {
            dispatch({
                type: "GRIDWEAPON_UPDATE",
                payload: {
                    weaponGridId: name,
                    weaponInfo: {
                        weaponId: selectedWeapon.weaponId,
                        imgurl: selectedWeapon.weaponUrl
                    }
                }
            });
            dispatch({type: "RESET_SELECTEDGRIDWEAPON"});
            dispatch({type: "RESET_SELECTEDWEAPON"});
        }  
    }


    return (
        <div>
        <h1>Weapon Grid</h1>
        <MainWeapon
            id={gridWeapons[0].weaponGridId}
            imgurl={gridWeapons[0].weaponInfo.imgurl}
            selected={gridSelectedWeapon.weaponGridId}
            handleSelect={handleSelect}
            />
        <SubWeaponsBox
            weapons={gridWeapons}
            selected={gridSelectedWeapon.weaponGridId}
            handleSelect={handleSelect}
            />
        </div>
    );
}

export default WeaponGrid;