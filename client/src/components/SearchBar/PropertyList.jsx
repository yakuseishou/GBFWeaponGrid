import React from "react";

function PropertyList(props) {
    return (
        <option value={props.value}>{props.name}</option>
    );
}

export default PropertyList;