import './App.css';
import Dashboard from './components/pages/dashboard/Dashboard';
import SideBar from './components/sideBar/SideBar'
import TopBar from './components/topBar/TopBar'

function App() {
  return (
    <div className="App">
      <div className="mainWrapper">
        <SideBar />
        <div className="main">
          <TopBar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
