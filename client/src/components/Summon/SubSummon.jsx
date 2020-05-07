import React from "react";

function SubSummon(props) {

    /* function to handle when sub is clicked */
    function handleClick() {
        alert(props.id);
    }

    return (
        <div className="col-lg-6 col-sm-6 col-sm-6 col-6 subWeapon" onClick={handleClick}>
            <img className="subWeapon-img" src={"img/subSummon/" + props.name + "_m.jpg"}></img>
            <div>⭐⭐⭐⭐</div>
        </div>
    );
}

export default SubSummon;