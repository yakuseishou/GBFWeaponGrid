import React from "react";
import SubWeapon from "./SubWeapon";

function SubWeaponsBox(props) {

    return (
        <div className="col-lg-8 col-md-8 col-sm-8 col-8 subGrid">
            {/* create each subweapon */}
            {props.ids.map((weapon, index) => {
                return (
                    <SubWeapon 
                        id={index}
                        name={weapon}
                    />
                );
            })}
        </div>
    );
}

export default SubWeaponsBox;