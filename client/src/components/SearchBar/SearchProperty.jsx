import React from "react";
import PropertyList from "./PropertyList";

function SearchProperty(props) {

    console.log(props.name);
    return (
        <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">{props.name}</label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>{props.name}</option>
                {props.lists.map((cont, index) => {
                    return (
                        <PropertyList 
                        name={cont}
                        value={index + 1}
                    />);
                })}
            </select>
        </div>
    );
}

export default SearchProperty;