import React, {useState} from "react";
import WeaponGrid from "./WeaponGrid/WeaponGrid";
import SummonGrid from "./Summon/SummonGrid";

function  GridSM() {
    const [grid, setGrid] = useState("weapon");

    function switchGrid() {
        if (grid != "weapon") {
            setGrid("weapon");
        } else {
            setGrid("summon");
        }
    }

    return (
        <div className="row">
            <div className={"col-md-6 col-sm-7 col-10 grid grid-sm " + grid}>
                <div id="carouselExampleControls" className="carousel slide" data-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <WeaponGrid />
                        </div>
                        <div className="carousel-item">
                            <SummonGrid />
                        </div>
                    </div>
                    <a onClick={switchGrid} className="carousel-control-prev btn-left" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a onClick={switchGrid} className="carousel-control-next btn-right" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GridSM;