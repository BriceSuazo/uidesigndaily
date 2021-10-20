import './dashboard.css'
import SmallWidget from './../../smallWidget/SmallWidget'
import Chart from './../../chart/Chart'
import LargeWidget from '../../largeWidget/LargeWidget'
import TopSales from '../../topSales/TopSales'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboardWrapper">
                <div className="dashboardTitleWrapper">
                    <i className='bx bxs-dashboard dashboardTitleIcon'></i>
                    <span className="dashboardTitle">Dashboard</span>
                </div>

                <div className="dashBoardTopWidgets">
                    <SmallWidget title="Total Sales" value="$7,856,022,303" percent="3.56"/>
                    <SmallWidget title="Passenger Trips" value="23,703,696" percent="-0.55"/>
                    <SmallWidget title="U.S. Domestic" value="14,927,760" percent="-1.82"/>
                    <SmallWidget title="International" value="8,775,936" percent="1.69"/>
                </div>

                <Chart title="Total Fare" desc="Total of the fare amounts for all transactions, regardless of itinerary."/>
                <LargeWidget title="System Information" desc="Values shown are as of the selected calendar month and YTD values for the year through the end of the calendar month selected."/>
            </div>
            <TopSales />
        </div>
    )
}

export default Dashboard
