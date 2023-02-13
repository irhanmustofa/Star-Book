

import './App.css'
import NaigationBar from "./components/NavigationBar"
import "./style/LandingPage.css"
import Intro from "./components/Intro"
import Populer from "./components/Populer"
import Umum from "./components/Umum"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="MyBG">
        <NaigationBar />
        <Intro />
      </div>
      {/* end intro section */}

      {/* populer section */}
      <div className="populer">
      <Populer />
      </div>
      {/* end populer section */}

      {/* populer section */}
      <div className="umum">
      <Umum />
      </div>
      {/* end populer section */}
    </div>
  );
}

export default App;
