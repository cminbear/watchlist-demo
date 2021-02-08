import React from 'react';

const blank = ( props ) => {
    return (
        <div className="watchlist-blank">
            <p className="desc">
                Nothing in this watchlist yet
            </p>
            <button className="restart" onClick={props.restart}>
                Restart with preset data 
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
};


export default blank;