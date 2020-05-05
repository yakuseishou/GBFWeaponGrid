import React from "react";
import SubWeaponsBox from "./WeaponGrid/SubWeaponsBox"
import MainWeapon from "./WeaponGrid/MainWeapon";

function App() {
    return (
        <div className="row">
            <div className="col-lg-6 grid">
                <MainWeapon />
                <SubWeaponsBox />
            </div>
        </div>
    );
}

export default App;