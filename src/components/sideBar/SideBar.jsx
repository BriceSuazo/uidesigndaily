import './sideBar.css'

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <div className="sideBarTop">
                    <div className="flightSaleSelectWrapper">
                        <select className="flightSaleSelect" name="flightSale" id="flightSale">
                            <option value="" disabled selected>Flight Sales</option>
                            <option value="test1">Test 1</option>
                            <option value="test2">Test 2</option>
                            <option value="test3">Test 3</option>
                            <option value="test4">Test 4</option>
                        </select>
                        <i className="bx bx-chevron-down sideBarTopIconDown"></i>
                    </div>
                </div>
                <div className="sideBarBottom">
                    <div className="sideBarButton focus">
                        <i className='bx bxs-dashboard sideBarButtonIcon'></i>
                        <span className="sideBarButtonTitle">Dashboard</span>
                    </div>
                    <div className="sideBarButton">
                        <i className='bx bx-cog sideBarButtonIcon'></i>
                        
                        <span className="sideBarButtonTitle">Configure</span>
                    </div>
                    <div className="sideBarButton">
                        <i className='bx bxs-dashboard sideBarButtonIcon'></i>
                        <span className="sideBarButtonTitle">Sales</span>
                    </div>
                    <div className="sideBarButton">
                        <i className='bx bxs-dashboard sideBarButtonIcon'></i>
                        <span className="sideBarButtonTitle">Vendors</span>
                    </div>
                    <div className="sideBarButton">
                        <i className='bx bxs-dashboard sideBarButtonIcon'></i>
                        <span className="sideBarButtonTitle">Administration</span>
                    </div>
                    <div className="sideBarButton">
                        <i className='bx bxs-dashboard sideBarButtonIcon'></i>
                        <span className="sideBarButtonTitle">Leaderboard</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
