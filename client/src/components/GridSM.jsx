import React from "react";
import WeaponGrid from "./WeaponGrid/WeaponGrid";
import SummonGrid from "./Summon/SummonGrid";

function  GridSM() {

    return (
        <div className="row">
            <div className="col-md-6 col-sm-8 col-12 weapon grid">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <WeaponGrid />
                        </div>
                        <div class="carousel-item">
                            <SummonGrid />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GridSM;