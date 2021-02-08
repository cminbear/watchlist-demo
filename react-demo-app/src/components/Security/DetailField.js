import React from 'react';

const detailField = ( props ) => {
    return (
        <div className="detail-field">
            <div className="container">
                <div className="row">  
                    <div className="col-6"> 
                        <div className="field-name float-left">
                            {props.name}
                        </div>
                    </div>
                    <div className="col-6"> 
                        <div className="field-value float-right">
                            {props.value}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default detailField;