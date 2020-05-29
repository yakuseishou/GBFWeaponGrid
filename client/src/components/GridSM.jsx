import React from "react";
import WeaponGrid from "./WeaponGrid/WeaponGrid";
import SummonGrid from "./Summon/SummonGrid";

function  GridSM() {

    return (
        <div className="row">
            <div className="col-md-6 col-sm-8 col-12 weapon grid">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <WeaponGrid />
                        </div>
                        <div className="carousel-item">
                            <SummonGrid />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GridSM;