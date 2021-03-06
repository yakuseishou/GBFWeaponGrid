import React from "react";

function SubWeapon(props) {

    return (
        <div className="col-lg-4 col-sm-4 col-sm-4 col-4 subWeapon">
            <div>
                <img 
                    className={(props.id != props.selected) ? "subWeapon-img" : "subWeapon-img Grid-img-border"}
                    name={props.id}
                    onClick={props.handleSelect}
                    src={props.imgurl} 
                    alt="subWeapon-img">
                </img>
            </div>
            <div>⭐⭐⭐⭐</div>
        </div>
    );
}

export default SubWeapon;