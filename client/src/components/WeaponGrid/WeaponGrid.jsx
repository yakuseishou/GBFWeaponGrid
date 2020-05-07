import React, {useState} from "react";
import MainWeapon from "./MainWeapon";
import SubWeaponsBox from "./SubWeaponsBox";

function WeaponGrid() {
    /* default img should change to empty img */
    const [emptySlot] = useState("1040019900");

    /* mHand saves main weapon id and setHand will be a function to update it*/
    const [mHand, setMHand] = useState(emptySlot);

    /* array for SubWeapon id might change it to object 
    so it can also hold infor for which sub weapon it is on the grid */
    const [subs, setSubs] = useState(() => {
        const array = [];
        for (let i = 0; i < 9; i++) {
            array.push(emptySlot);
        }
        return (array);
    });

    return (
        <div>
            <h1>Weapon Grid</h1>
            <MainWeapon 
                name={mHand}
            />
            <SubWeaponsBox
                ids={subs}
            />
        </div>
    );
}

export default WeaponGrid;