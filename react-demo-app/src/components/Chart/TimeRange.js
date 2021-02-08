import React from 'react';
import TimeRangeButton from './TimeRangeButton';

const timeRange = ( props ) => {
    const options = ["1W", "1M", "3M", "1Y"];

    return (
        <div className="time-range-container">
            {options.map((option, index) => (
                <TimeRangeButton 
                    key={index} 
                    range={option} 
                    selected={option === props.selected ? true : false} 
                    clicked={() => props.clicked(option)}
                />
            ))}
       </div>
    )
};

export default timeRange;