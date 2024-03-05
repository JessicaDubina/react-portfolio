import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import background from "../src/assets/light_grey_dots_background.jpg"

const styles = {
  spacing: {
    paddingTop: "40px"
  }
}

function App() {
    return (
          <div>
            <Header />
            <div className="background-container" style={styles.spacing}>
              <Outlet />
            </div>
            <Footer />
          </div>
      );
}

export default App;
