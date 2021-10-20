import './item.css'

const Item = (props) => {
    return (
        <div className="item">
            <div className="itemTitleWrapper">
                <span className="itemTitle">{props.title}</span>
                <span className="itemValue">{props.value}</span>

            </div>
            <span className={props.percent >= 0 ? "itemPercent up" : "itemPercent down"}>{props.percent}%</span>
        </div>
    )
}

export default Item
