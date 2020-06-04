import React, {useState} from "react";
import GridLG from "./GridLG";
import GridSM from "./GridSM";

function  Grids(props) {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
    });

    function resizeWin() {
        return (
            width < 1000) ? 
                <GridSM 
                    listSelected={props.listSelected}
                    selectedId={props.selectedId}
                    gridSelected={props.gridSelected}
                    handleGrid={props.handleGrid}
                /> : 
                <GridLG 
                    listSelected={props.listSelected}
                    selectedId={props.selectedId}
                    gridSelected={props.gridSelected}
                    handleGrid={props.handleGrid}
                />;
    }

    return (
        <div className="row">
            {resizeWin()}
        </div>
    );
}

export default Grids;