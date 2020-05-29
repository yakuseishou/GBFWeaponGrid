import React from "react";
import PropertyList from "./PropertyList";

function SearchProperty(props) {

    return (
        <div className="col-auto my-1">
            <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">{props.name}</label>
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option>{props.name}</option>
                {props.lists.map((cont, index) => {
                    return (
                        <PropertyList
                        key={index}
                        name={cont}
                        value={index + 1}
                    />);
                })}
            </select>
        </div>
    );
}

export default SearchProperty;