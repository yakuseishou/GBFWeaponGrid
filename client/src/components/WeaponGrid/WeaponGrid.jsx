import React, {useState} from "react";
import MainWeapon from "./MainWeapon";
import SubWeaponsBox from "./SubWeaponsBox";
import { useSelector, useDispatch } from 'react-redux';

function WeaponGrid() {

    const gridWeapons = useSelector(state => state.weaponGrid);
    const selectedWeapon = useSelector(state => state.selectedWeapon);

    const [selected, setSelected] = useState(-1);
    const dispatch = useDispatch();

    function handleSelect(event) {
        const { name } = event.target;
        (selected === name) ? setSelected(-1) : setSelected(name);
        if(selectedWeapon.selected && selected) {
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
        }
    }



    return (
        <div>
            <h1>Weapon Grid</h1>
            <MainWeapon
                id={gridWeapons[0].weaponGridId}
                imgurl={gridWeapons[0].weaponInfo.imgurl}
                selected={selected}
                handleSelect={handleSelect}
            />
            <SubWeaponsBox
                weapons={gridWeapons}
                selected={selected}
                handleSelect={handleSelect}
            />
        </div>
    );
}

export default WeaponGrid;