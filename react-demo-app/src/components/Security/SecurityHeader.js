import React from 'react';

const securityHeader = ( props ) => {
    const onWatchlist = props.onWatchlist;
    let button;
    
    if (onWatchlist) {
        button =  <button><i className ="fas fa-minus-circle"></i> Remove from watchlist</button>;
    } else {
        button = <button><i className ="fas fa-plus-circle"></i> Add to watchlist</button>;
    }

    return (
        <div className="security-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 text-left font-weight-bold">
                        <p className="symbol text-secondary">
                            {props.symbol} 
                        </p>
                        <p className="divider text-secondary font-weight-light"> | </p> 
                        <p className="name text-dark">
                            {props.name}
                        </p>
                    </div>
                    <div 
                        className="col-lg-4 col-md-12 col-sm-12 text-right watchlist-button text-orange font-weight-bold"
                        onClick={props.clicked} 
                    >
                        {button}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default securityHeader;