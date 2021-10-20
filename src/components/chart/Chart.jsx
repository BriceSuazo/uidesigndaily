import './chart.css'
// import { Bar } from 'react-chartjs-2'

const Chart = (props) => {
    return (
      <div className="largeWidget">
      <div className="largeWidgetHeader">
        <div className="largeWidgetTitle">
          <span className="largeWidgetTitleText">{props.title}</span>
          <span className="largeWidgetDesc">{props.desc}</span>
        </div>
        <i className="bx bx-chevron-down largeWidgetButtonMore"></i>
      </div>
      {/* <Bar 
        data={{labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],}}
        width={100}
        height={100}
        option={{
          maintainAspectRatio: false,
        }}
      /> */}
    </div>
    )
}

export default Chart
