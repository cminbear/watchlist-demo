import React, { Component } from 'react';
import WatchItem from "./WatchItem";
import Blank from "./Blank";
import Disclaimer from "./Disclaimer";
import { connect } from "react-redux";
import { getWatchlist, updateSecurityOnWatchlist, restartWatchlist } from "../../actions/securityActions";
import PropTypes from "prop-types";
import Spinner from 'react-bootstrap/Spinner'

class Watchlist extends Component {
    
    state = {
        isEditMode: false,
        watchlist: {}
    };

    componentDidMount() {
        this.props.getWatchlist();
    }

    toggleButtonHandler = () => { 
        this.setState({isEditMode: !this.state.isEditMode, watchlist: this.props.watchlist.watchlist});
    }

    restartWatchlist = () => {
        this.setState({isEditMode: false});
        this.props.restartWatchlist();
    }

    removeFromWatchlist = (id) => {
        var curWatchlist = this.state.watchlist;
        for(var i=0; i < curWatchlist.length; i++) {
            if (id === curWatchlist[i].securityIdentifier) {
                this.props.updateSecurityOnWatchlist(id);
                curWatchlist.splice(i, 1); 
                i--; 
            }
        }
        this.setState({watchlist: curWatchlist});
    }

    render() {
        const { watchlist } = this.props.watchlist;
        const isLoaded = this.props.watchlist.loaded;

        return ( 
            <div className="watchlist">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="instruction text-secondary">
                                Feel free to play around! 
                                <br />
                                You can always restart with preset data when watchlist is empty.
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="watchlist-head"> 
                                <h3 className="watchlist-title text-secondary font-weight-bold">
                                    Trade watchlist
                                </h3>
                                {isLoaded && watchlist.length !== 0 ?
                                    <button onClick={this.toggleButtonHandler}>{this.state.isEditMode ? "Done" : "Manage"}</button>
                                    :
                                    <React.Fragment />
                                }
                            </div>
                            {isLoaded ? 
                                <div className="watchlist-content">
                                    {watchlist.length === 0 ?
                                        <Blank restart={this.restartWatchlist} />
                                    :
                                    watchlist.map((watchItem, index) => (
                                        <WatchItem 
                                            key={index} 
                                            watchItem={watchItem} 
                                            editable={this.state.isEditMode} 
                                            removed={this.removeFromWatchlist}
                                        />
                                    ))
                                    }
                                </div>
                                :
                                <React.Fragment>
                                    <br /><br /><br />
                                    <Spinner animation="border" variant="secondary" />
                                    <div className="loading-text text-secondary">Loading :) </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
                <Disclaimer />
            </div> 
        );
    }
}

Watchlist.propTypes = {
    watchlist: PropTypes.object.isRequired,
    getWatchlist: PropTypes.func.isRequired ,
    updateSecurityOnWatchlist: PropTypes.func.isRequired,
    restartWatchlist: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    watchlist: state.securityReducer
});

export default connect(
    mapStateToProps, 
    { getWatchlist, updateSecurityOnWatchlist, restartWatchlist }
)(Watchlist);