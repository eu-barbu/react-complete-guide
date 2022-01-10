import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {

    const getDataPoint = (dataPoint) => {
        const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
        const totalMax = Math.max(...dataPointValues);

        return <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}/>
    }

    return <div className='chart'>
        {props.dataPoints.map(getDataPoint)}
    </div>
};

export default Chart;