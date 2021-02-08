import React, { Component } from 'react';
import { getSecurity, updateSecurityOnWatchlist, getMarketDataOneWeek, 
    getMarketDataOneMonth, getMarketDataThreeMonths, getMarketDataOneYear } 
    from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SecurityHeader from "./SecurityHeader";
import SecurityContent from "./SecurityContent";
import Disclaimer from "../Watchlist/Disclaimer";

class Security extends Component {
    
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getSecurity(id);
        this.props.getMarketDataOneWeek(id);
    }

    updateSecurityOnWatchlistHandler = () => {
        const { id } = this.props.match.params;
        this.props.updateSecurityOnWatchlist(id);
    }

    changeTimeRangeHandler = (timeRange) => {
        const { id } = this.props.match.params;

        switch(timeRange) {
            case "1W":
                this.props.getMarketDataOneWeek(id);
                break;

            case "1M":
                this.props.getMarketDataOneMonth(id);
                break;

            case "3M":
                this.props.getMarketDataThreeMonths(id);
                break;

            case "1Y":
                this.props.getMarketDataOneYear(id);
                break;

            default:
                this.props.getMarketDataOneWeek(id);
                break;
        }
    }

    render() {
        const { security } = this.props.security;
        const { marketData } = this.props.marketData;
        
        return (
            <div className="security-wrapper">
                <SecurityHeader 
                    symbol={security.securitySymbol} 
                    name={security.securityName}
                    onWatchlist={security.onWatchlist}   
                    clicked={this.updateSecurityOnWatchlistHandler}
                />
                <SecurityContent 
                    security={security}
                    marketData={marketData}
                    changeTimeRange={this.changeTimeRangeHandler}
                />
                <Disclaimer />
            </div>
        );
    }
}

Security.propTypes = {
    getSecurity: PropTypes.func.isRequired,
    updateSecurityOnWatchlist: PropTypes.func.isRequired,
    getMarketDataOneWeek: PropTypes.func.isRequired,
    getMarketDataOneMonth: PropTypes.func.isRequired,
    getMarketDataThreeMonths: PropTypes.func.isRequired,
    getMarketDataOneYear: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired,
    marketData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.securityReducer,
    marketData: state.securityReducer
}); 

export default connect(
    mapStateToProps, 
    { getSecurity, updateSecurityOnWatchlist, getMarketDataOneWeek, 
        getMarketDataOneMonth, getMarketDataThreeMonths, getMarketDataOneYear }
)(Security);