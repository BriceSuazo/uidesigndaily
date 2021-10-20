import './topSales.css'
import { topSales } from './../../dummyData'

const TopSales = () => {
    return (
        <div className="topSales">
            <div className="topSalesFilterWrapper">
                <span className="filterLabel">Report for</span>
                <select name="filter" id="filter" className="filterSelect">
                    <option value="filter1">25.07 - 06.08</option>
                </select>
                <i className="bx bx-cog filterSettingsIcon" ></i>
            </div>

            <div className="topSalesList">
                <div className="topSalesListTitleWrapper">
                    <span className="topSalesListTitle">Top 10 sales by airlines</span>
                </div>

                {topSales.map(item => (
                    <div className="topSalesListItem">
                        <div className="topSalesListItemWrapper">
                            <div className="topSalesListItemPicWrapper">
                                <img src={item.img} alt="" className="topSalesListItemPic"/>
                            </div>
                            <div className="topSalesListWrapper">
                                <span className="topSalesListItemTitle">{item.name}</span>
                                <span className="topSalesListItemValue">${item.value}</span>
                            </div>
                        </div>
                        <span className="topSalesListItemPercent">{item.percent}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopSales
