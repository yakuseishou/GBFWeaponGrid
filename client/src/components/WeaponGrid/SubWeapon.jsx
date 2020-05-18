import React from "react";

function SubWeapon(props) {

    /* function to handle when sub is clicked */
    function handleClick() {
        alert(props.id);
    }

    return (
        <div className="col-lg-4 col-sm-4 col-sm-4 col-4 subWeapon" onClick={handleClick}>
            <div>
                <img className="subWeapon-img" src={"img/subWeapon/m" + props.name + ".jpg"} alt="subWeapon-img"></img>
            </div>
            <div>⭐⭐⭐⭐</div>
        </div>
    );
}

export default SubWeapon;