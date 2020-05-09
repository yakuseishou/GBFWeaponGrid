import React, {useState} from "react";
import GridLG from "./GridLG";
import GridSM from "./GridSM";

function  Grids() {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
    });

    function resizeWin() {
        if (width < 1000) {
            return (
                <GridSM />
            ); 
        } else {
            return (
                <GridLG />
            );    
        }
    }

    return (
        <div className="row">
            {resizeWin()}
        </div>
    );
}

export default Grids;