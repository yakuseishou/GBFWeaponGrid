import React from "react";

function MainWeapon(props) {

    function selectMH() {
        alert("Main Hand is Clicked");
    }

    return (
        <div className="col-lg-2 mWeapon" onClick={selectMH}>
            <img className="mWeapon-img" 
                src={"img/170px-Weapon_ls_" + props.name + ".jpg"}>
            </img>  
        </div>
    );
}

export default MainWeapon;