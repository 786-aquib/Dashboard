import React from "react";
import './App.css';
import TopHeader from './Components/TopHeader';
import SecondLeftHeader from "./Components/SecondLeftBar";
import UsernameSection from "./Components/UsernameSection";
import ThreeCardSection from "./Components/ThreeCardSection";

function App() {
  return (
    <div style={{ backgroundColor: 'whitesmoke', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <TopHeader />
        <div style={{ display: 'flex', flex: 1 }}> {/* This flex container holds the left sidebar and username section */}
          <SecondLeftHeader />
          <div style={{ flex: 1, marginLeft: '20px' }}> {/* Allow UsernameSection to take full width */}
            <UsernameSection />
            <div style={{ marginTop: '20px' }}> {/* Add some spacing above the card section */}
              <ThreeCardSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
