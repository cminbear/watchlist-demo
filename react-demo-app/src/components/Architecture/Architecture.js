import React from 'react';
import Architecture from '../../assets/Architecture.png';

const architecture = ( props ) => {
    return (
        <div className="architecture">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <a className="github" href="https://github.com/clairemin414/watchlist-demo" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <img className="img-fluid" src={Architecture} alt="diagram" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default architecture;