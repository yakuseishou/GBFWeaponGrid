import React from "react";
import SubWeapon from "./SubWeapon";

const weaImgs = [];
for (let i = 0; i < 9; i++) {
    weaImgs.push(i);
}

function SubWeaponsBox() {

    return (
        <div className="col-lg-9 subGrid">
            {weaImgs.map(weapon => {
                return (
                    <SubWeapon />
                );
            })}
        </div>
    );
}

export default SubWeaponsBox;