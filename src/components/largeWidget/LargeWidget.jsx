import Item from '../item/Item'
import './largeWidget.css'

const LargeWidget = (props) => {
    return (
        <div className="largeWidget">
          <div className="largeWidgetHeader">
            <div className="largeWidgetTitle">
              <span className="largeWidgetTitleText">{props.title}</span>
              <span className="largeWidgetDesc">{props.desc}</span>
            </div>
            <i className="bx bx-chevron-down largeWidgetButtonMore"></i>
          </div>
          <div className="itemWrapper">
            <Item title="Total Taxes and Fees" value="$1,469,543,239" percent="6.99"/>
            <Item title="Refunds & Exchanges Charges" value="$114,877,344" percent="-1.18"/>
            <Item title="Credit Card Sales" value="$6,957,199,139" percent="3.56"/>
            <Item title="Total Passenger Trips" value="23,703,696" percent="-0.55"/>
            <Item title="Cash Sales" value="$898,823,164" percent="3.50"/>
            <Item title="EMD Sales" value="$5,946,214" percent="-4.75"/>
          </div>
        </div>
    )
}

export default LargeWidget
