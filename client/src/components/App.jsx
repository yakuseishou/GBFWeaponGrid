import React from "react";
import WeaponGrid from "./WeaponGrid/WeaponGrid";
import SummonGrid from "./Summon/SummonGrid";

function App() {
    return (
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 grid">
                <WeaponGrid />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 grid">
                <SummonGrid />
            </div>
        </div>
    );
}

export default App;