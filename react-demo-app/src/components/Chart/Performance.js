import React from 'react';
import {Line} from 'react-chartjs-2';

const performance = ( props ) => {
    const minPrice = props.marketData.minPrice;
    const maxPrice = props.marketData.maxPrice;
    const priceList = props.marketData.priceList;
    const label = props.marketData.label;
    const showScale = props.marketData.showScale;

    const data = {
        labels: label,
        datasets: [
            {
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#ec6f00',
                borderColor: '#ec6f00',
                borderWidth: 2,
                pointRadius: 0,
                data: priceList
            }
        ]
    }

    return (
        <div className="performance">
            <Line 
                data={data} 
                options={{
                    responsive: true,
                    title:{
                        display:false
                    },
                    hover: {
                        mode: 'label'
                    },
                    legend:{
                        display:false,
                    },
                    scales:
                    {
                        yAxes: [{
                        display: showScale,
                        ticks: {
                            min: minPrice,
                            max: maxPrice
                        }
                        }]
                    }
                }}    
            />
        </div>
    )
};

export default performance;