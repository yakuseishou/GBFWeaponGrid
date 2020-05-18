import React from "react";

const colNum = 2;
const colClass = "col-" + colNum + " col-xl-" + colNum + " col-lg-" + colNum + " col-md-" + colNum + " col-sm-" + colNum + " col-xs-" + colNum;
const item = "shadow-sm mb-2 bg-white rounded";

function Item(props) {
    return (
        <div className="col-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 shadow p-2 mb-3 bg-white rounded itemCard">
            <div className="row">
                <div className={"listItem " + colClass} >
                        <img className="listItem-img" 
                            src={"img/subWeapon/m" + props.src + ".jpg"} alt="weaponImg" />
                    <div className={item}>{props.info.name}</div>
                </div>
                <div className={"listItem " + colClass} >
                    <div className={item}>Element: {props.info.element}</div>
                    <div className={item}>skill1: {props.info.atk}</div>
                </div>
                <div className={"listItem " + colClass} >
                    <div className={item}>Proficiency: {props.info.element}</div>
                    <div className={item}>skill2: {props.info.hp}</div>
                </div>
                <div className={"listItem " + colClass} >
                    <div className={item}>C.A. Atk: {props.info.element}</div>
                    <div className={item}>skill3: {props.info.hp}</div>
                </div>
            </div>
        </div>
    );
}

export default Item;