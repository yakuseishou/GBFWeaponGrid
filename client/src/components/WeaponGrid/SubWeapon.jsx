import React from "react";
// import Weapons from "../testingData";

function SubWeapon(props) {
    // const [url, setUrl] = useState(() => {
    //     const weapon = Weapons.find(item => item.id ="")
    // });

    return (
        <div className="col-lg-4 col-sm-4 col-sm-4 col-4 subWeapon">
            <div>
                <img 
                    className={(props.id != props.selected) ? "subWeapon-img" : "subWeapon-img Grid-img-border"}
                    name={props.id}
                    onClick={props.handleSelect}
                    src={"img/subWeapon/m" + props.name + ".jpg"} 
                    alt="subWeapon-img">
                </img>
            </div>
            <div>⭐⭐⭐⭐</div>
        </div>
    );
}

export default SubWeapon;