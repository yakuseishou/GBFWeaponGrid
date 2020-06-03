import React from "react";
import WeaponGrid from "./WeaponGrid/WeaponGrid";
import SummonGrid from "./Summon/SummonGrid";

function  GridLG() {
    return (
        <div className="">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-6 weapon grid">
                    <WeaponGrid />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-6 summon grid">
                    <SummonGrid />
                </div>
            </div>
        </div>
    );
}

export default GridLG;