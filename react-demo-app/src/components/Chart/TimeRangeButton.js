import React from 'react';

const timeRangeButton = ( props ) => {
    const assignedClasses = ["time-range-button"];

    if (props.selected) {
        assignedClasses.push("selected");
    }

    return (
        <button className={assignedClasses.join(' ')} onClick={props.clicked}>
            {props.range}
        </button>
    )
};

export default timeRangeButton;