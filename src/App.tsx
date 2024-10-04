    import React from "react";
    import './App.css';
    import TopHeader from './Components/TopHeader';
    import SecondLeftHeader from "./Components/SecondLeftBar";
    import UsernameSection from "./Components/UsernameSection";
    import ThreeCardSection from "./Components/ThreeCardSection";
    import MyteamAndWorkHistory from "./Components/MyTeamAndWorkHistory";

    const App: React.FC = () => {
      return (
        <div style={{ backgroundColor: 'whitesmoke', height: '100vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <TopHeader />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <div style={{ display: 'flex', flex: 1, marginRight: '20px' }}>
                <SecondLeftHeader />
                <div style={{ flex: 1 }}>
                  <UsernameSection />
                  <div
                     style={{display:'flex', flexDirection:'column'}}
                  >
                  <div style={{ marginTop: '20px' }}>
                    <ThreeCardSection />
                    <div style={{ marginTop: '20px', marginLeft: '10px', marginRight: '10px' }}>
                    <MyteamAndWorkHistory />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default App;
