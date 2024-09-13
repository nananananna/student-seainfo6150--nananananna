import React from "react";
import './Reorder.css';

const Reorder=({onReorder})=>{
    return(
        <button className="reorder-button" onClick={onReorder}>
            Reorder
        </button>
    );
};
export default Reorder;