import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  const totalMax = Math.max(...props.data.map((item) => item.value));

  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMax}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default Chart;
