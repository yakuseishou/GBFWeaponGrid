import React from "react";

function MainSummon(props) {

    /* function to handle when main hand is clicked */
    function selectMH() {
        alert("Main Summon is Clicked");
    }

    return (
        <div className="col-lg-3 col-md-3 col-sm-3 col-3 mWeapon" onClick={selectMH}>
                <img className="mWeapon-img" 
                    src={"img/mainSummon/" + props.name + "_p.jpg"}>
                </img>
                <p>
                    ⭐⭐⭐⭐
                </p>
        </div>
    );
}

export default MainSummon;