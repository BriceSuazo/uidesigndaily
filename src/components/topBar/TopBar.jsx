import './topBar.css'

const TopBar = () => {
    return (
        <div className="topBar">
            <i className='bx bx-search topBarSearchIcon'></i>
            <i className='bx bx-bell topBarNotificationIcon'></i>
            <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s900-c-k-c0x00ffffff-no-rj" alt="" className="topBarProfilePic"/>
        </div>
    )
}

export default TopBar
