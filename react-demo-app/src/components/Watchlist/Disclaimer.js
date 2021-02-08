import React from 'react';

const disclaimer = ( props ) => {
    return (
        <div className="disclaimer text-left text-secondary">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="disclaimer-header text-uppercase font-weight-bold">
                            Disclaimer
                        </div>
                        <div className="disclaimer-content">
                            Due to market data licensing restrictions, stock information may be shown with a lag. 
                            Stock charts range from one week to one year in length.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default disclaimer;