import React from 'react';
import Performance from '../Chart/Performance';
import TimeRange from '../Chart/TimeRange';
import DetailField from '../Security/DetailField';

const securityContent = ( props ) => {
    return (
        <div className="security-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 ">    
                        <div className="performance section">
                            <div className="section-title text-secondary font-weight-bold text-left">Performance</div>
                            <div className="section-box">
                                <div className="last-price-field">
                                    <div className="last-price text-dark font-weight-bold">
                                        {props.security.lastPrice} 
                                    </div>
                                    <div className="currency text-secondary font-weight-bold">
                                        USD
                                    </div>
                                </div>
                                <Performance 
                                    marketData={props.marketData}
                                />
                                <TimeRange 
                                    selected={props.marketData.timeRange} 
                                    clicked={props.changeTimeRange} />
                            </div>
                        </div>
                        <div className="market-details section">
                            <div className="section-title text-secondary font-weight-bold text-left">Market details 
                                <div className="eod-date">({props.security.dateForLatestEOD})</div>
                            </div>
                            <div className="section-box">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <DetailField name="Open" value={props.security.openPrice} />
                                            <DetailField name="Close" value={props.security.closePrice} />
                                            <DetailField name="Volume" value={props.security.volume} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <DetailField name="High" value={props.security.highPrice} />
                                            <DetailField name="Low" value={props.security.lowPrice} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about section">
                            <div className="section-title text-secondary font-weight-bold text-left">About {props.security.securitySymbol}</div>
                            <div className="section-box text-left">
                                {props.security.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default securityContent;