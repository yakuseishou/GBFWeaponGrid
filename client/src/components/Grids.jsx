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
        return (width < 1000) ? <GridSM /> : <GridLG />;
    }

    return (
        <div className="row">
            {resizeWin()}
        </div>
    );
}

export default Grids;