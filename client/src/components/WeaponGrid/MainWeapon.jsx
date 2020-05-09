import React from "react";

function MainWeapon(props) {

    /* function to handle when main hand is clicked */
    function selectMH() {
        alert("Main Hand is Clicked");
    }

    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-3 mWeapon" onClick={selectMH}>
            <img className="mWeapon-img" 
                src={"img/mHandWeapon/ls_" + props.name + ".jpg"}>
            </img>
            <p>
                ⭐⭐⭐⭐
            </p>
        </div>
    );
}

export default MainWeapon;