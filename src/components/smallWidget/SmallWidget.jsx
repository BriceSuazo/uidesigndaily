import './smallWidget.css'

const SmallWidget = (props) => {
    return (
        <div className="smallWidget">
            <div className="smWidgetHeader">
                <span className="smWidgetTitle">{props.title}</span>
                <span className={props.percent >= 0 ? "smWidgetPercent up" : "smWidgetPercent down"}>{props.percent}%</span>
            </div>
            <span className="smWidgetValue">{props.value}</span>
        </div>
    )
}

export default SmallWidget
