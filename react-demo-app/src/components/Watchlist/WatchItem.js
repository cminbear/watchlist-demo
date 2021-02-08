import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getMarketDataOneWeek } from "../../actions/securityActions";
import Performance from '../Chart/Performance';

const watchItem = ( props ) => {

    const renderSecurityDetail = (id) => {
        window.location.href = "/security/" + id;
    }
    
    const isEditable = props.editable;

    return (
        <React.Fragment>
        {isEditable ? 
        <div className="watch-item">
            <div className="container">
                <div className="row">
                    <div className="col-9 text-left">
                        <div className="title">
                            <div className="symbol text-dark font-weight-bold">
                                {props.watchItem.securitySymbol}
                            </div>
                            <div className="name">
                                {props.watchItem.securityName}
                            </div>
                        </div>
                    </div>
                    <div className="col-3 remove-watch-item text-right" onClick={() => props.removed(props.watchItem.securityIdentifier)} >
                        <button><i className="fas fa-minus-circle"></i></button>
                    </div>
                </div>
            </div>
        </div>
        :
        <button className="watch-item" onClick={() => renderSecurityDetail(props.watchItem.securityIdentifier)}>
            <div className="container">
                <div className="row">
                    <div className="col-3 text-left">
                        <div className="title">
                            <div className="symbol text-dark font-weight-bold">
                                {props.watchItem.securitySymbol}
                            </div>
                            <div className="name text-truncate">
                                {props.watchItem.securityName}
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="chart">
                            <Performance 
                                marketData={props.watchItem.defaultMarketData}
                            />
                        </div> 
                    </div>
                    <div className="col-4">
                        <div className="price text-dark font-weight-bold">
                            {props.watchItem.lastPrice}
                        </div>
                    </div>
                </div>
            </div>
        </button>
        }
        </React.Fragment>
    )
};

watchItem.propTypes = {
    getMarketDataOneWeek: PropTypes.func.isRequired,
    marketData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    marketData: state.securityReducer
}); 

export default connect(
    mapStateToProps, 
    { getMarketDataOneWeek }
)(watchItem);
