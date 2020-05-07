import React, {useState} from "react";
import MainSummon from "./MainSummon";
import SubSummonBox from "./SubSummonBox";

function SummonGrid() {
    /* default img should change to empty img */
    const [emptySlot] = useState("6079");

    /* mHand saves main Summon id and setHand will be a function to update it*/
    const [mHand, setMHand] = useState(emptySlot);

    /* array for SubSummon id might change it to object 
    so it can also hold infor for which sub Summon it is on the grid */
    const [subs, setSubs] = useState(() => {
        const array = [];
        for (let i = 0; i < 4; i++) {
            array.push(emptySlot);
        }
        return (array);
    });

    return (
        <div>
            <h1>Summon Grid</h1>
            <MainSummon 
                name={mHand}
            />
            <SubSummonBox
                ids={subs}
            />
        </div>
    );
}

export default SummonGrid;