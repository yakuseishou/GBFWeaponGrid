import React from "react";
import SubWeapon from "./SubWeapon";

function SubWeaponsBox(props) {

    return (
        <div className="col-lg-9 col-md-9 col-sm-9 col-9 subGrid">
            {/* create each subweapon */}
            {props.weapons.map((weapon) => {
                if(weapon.weaponGridId != "weapon_0") {
                    return (
                        <SubWeapon
                            key={weapon.weaponGridId}
                            id={weapon.weaponGridId}
                            imgurl={weapon.weaponInfo.imgurl}
                            selected={props.selected}
                            handleSelect={props.handleSelect}
                        />
                    );
                }
            })}
        </div>
    );
}

export default SubWeaponsBox;