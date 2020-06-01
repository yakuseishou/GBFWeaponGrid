import React, {useState} from "react";
import PropertyList from "./PropertyList";

function SearchProperty(props) {
    const [displayValue, setdisplayValue]= useState(props.name);

    function handleSelectValue(event) {
        const { value } = event.target;
        setdisplayValue(value);
        props.setSearch(event);
    }

    return (
        <div className="col-auto my-1">
            <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">{props.name}</label>
            <select onChange={handleSelectValue} name={props.name} value={displayValue} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option >{props.name}</option>
                {props.lists.map((cont, index) => {
                    return (
                        <PropertyList
                        key={index}
                        name={cont}
                        value={cont}
                    />);
                })}
            </select>
        </div>
    );
}

export default SearchProperty;