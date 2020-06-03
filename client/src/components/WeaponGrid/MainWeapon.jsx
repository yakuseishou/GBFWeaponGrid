import React from "react";

function MainWeapon(props) {

// (props.id === props.selected) ? {width: "100%", height: "100%"} : {width: "70%", height: "70%"}
    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-3 mWeapon">
            <img className={(props.name != props.selected) ? "mWeapon-img" : "mWeapon-img Grid-img-border"}
                name={props.name}
                onClick={props.handleSelect}
                src={"img/mHandWeapon/ls_" + props.id + ".jpg"} alt="mHandWeapon-img">
            </img>
            <span role="img">
                ⭐⭐⭐⭐
            </span>
        </div>
    );
}

export default MainWeapon;