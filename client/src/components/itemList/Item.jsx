import React, {useState} from "react";

const colNum = 2;
const colNum1 = 3;
const colClass = "col-" + colNum + " col-xl-" + colNum + " col-lg-" + colNum + " col-md-" + colNum + " col-sm-" + colNum + " col-xs-" + colNum;
const col1Class = "col-" + colNum1 + " col-xl-" + colNum1 + " col-lg-" + colNum1 + " col-md-" + colNum1 + " col-sm-" + colNum1 + " col-xs-" + colNum1;
const item = "shadow-sm mb-2 bg-white rounded";

const col = "col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 shadow p-2 mb-3 bg-white rounded itemCard";

function Item(props) {
    return (
        <div className={(props.id != props.checked) ? col : col + " Grid-img-border"} >
            <div className="row">
                <div className={"listItem " + col1Class} >
                        <img className="listItem-img"
                            name={props.id}
                            onClick={props.handleCheck}
                            src={props.info.imgUrl} alt="weaponImg" />
                        {/* <input name={props.id} 
                            className="checkbox"
                            checked={(props.id === props.checked)} 
                            onChange={props.handleCheck} 
                            type="checkbox" 
                            aria-label="Checkbox for following text input">
                        </input> */}
                </div>
                <div className={"listItem " + colClass} >
                    <div className={item}>{props.info.weaponName}</div>
                    <div className={item}>skill1: {props.info.weaponSkill1}</div>
                </div>
                <div className={"listItem " + colClass} >
                    <div className={item}>Element: {props.info.element}</div>
                    <div className={item}>skill2: {props.info.weaponSkill2}</div>
                </div>
                <div className={"listItem " + colClass} >
                    <div className={item}>Proficiency: {props.info.weaponType}</div>
                    <div className={item}>skill3: {props.info.weaponSkill3}</div>
                    {/* <div className={item}>C.A. Atk: {props.info.ougiAbilityDescription}</div> */}
                </div>
            </div>
        </div>
    );
}

export default Item;