import React from "react";

function SubWeapon(props) {

    /* function to handle when sub is clicked */
    function handleClick() {
        alert(props.id);
    }

    return (
        <div className="col-lg-4 subWeapon" onClick={handleClick}>
            <img className="subWeapon-img" src={"img/Weapon_m_" + props.name + ".jpg"}></img>
        </div>
    );
}

export default SubWeapon;