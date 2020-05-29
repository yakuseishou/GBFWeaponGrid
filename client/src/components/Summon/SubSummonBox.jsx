import React from "react";
import SubSummon from "./SubSummon";

function SubSummonBox(props) {

    return (
        <div className="col-lg-9 col-md-9 col-sm-9 col-9 subGrid">
            {/* create each subSummon */}
            {props.ids.map((name, index) => {
                return (
                    <SubSummon
                        key={index}
                        id={index}
                        name={name}
                    />
                );
            })}
        </div>
    );
}

export default SubSummonBox;