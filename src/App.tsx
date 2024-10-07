import React from "react";
import './App.css';
import TopHeader from './Components/TopHeader';
import SecondLeftHeader from "./Components/SecondLeftBar";
import UsernameSection from "./Components/UsernameSection";
import ThreeCardSection from "./Components/ThreeCardSection";
import MyteamAndWorkHistory from "./Components/MyTeamAndWorkHistory";

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'whitesmoke', overflowY: 'auto', height: '100vh', overflowX:'hidden' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' , overflowX:'hidden'}}>
        <TopHeader />
        <div style={{ display: 'flex', flex: 1 }}>
          <SecondLeftHeader />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' , overflowX:'hidden'}}>
            <UsernameSection />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: '25px' }}>
              <div style={{ marginBottom: '-32px' }}>
                <ThreeCardSection />
              </div>
              <div style={{ marginLeft: '10px', marginRight: '10px', marginTop: 'auto' }}>
                <MyteamAndWorkHistory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
