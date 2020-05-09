import React from "react";

function Item(props) {
    return (
        <div>
            <img className="listItem listItem-img" src={"img/subWeapon/m" + props.src + ".jpg"}/>
            <p className="listItem">Name: {props.info.name}</p>
            <p className="listItem">Element: {props.info.element}</p>
            <p className="listItem">Atk: {props.info.atk}</p>
            <p className="listItem">Hp: {props.info.hp}</p>
        </div>
    );
}

export default Item;