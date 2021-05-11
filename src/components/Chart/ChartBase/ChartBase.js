import React from "react";
import "./ChartBase.css"
import ChartBar from "../ChartBar/ChartBar"

const ChartBase = props => {
    const dataPoints = props.data;
    console.log(dataPoints)
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    
    const dataPointsList = dataPoints.map( dataPoint => {
        return <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}/>
    }) 
    
    return (
        <div className="chart">
            {dataPointsList}
        </div>
    )
}

export default ChartBase;