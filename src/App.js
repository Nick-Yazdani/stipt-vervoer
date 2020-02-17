import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navbar-component/navbar.component';
import Footer from './components/footer-component/footer.component';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Vip from './pages/Vip';
import Touring from './pages/Touring';
import Busreizen from './pages/Busreizen';
import Feedback from './pages/Feedback';

import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" render={(props) => <Home {...props} title="Home" />} />
      <Route path="/contact" render={(props) => <Contact {...props} title="Contact" />} />
      <Route path="/vip-diensten" render={(props) => <Vip {...props} title="VIP Diensten" />} />
      <Route path="/touringcar-verhuur" render={(props) => <Touring {...props} title="Touringcar Verhuur" />} />
      <Route path="/busreizen" render={(props) => <Busreizen {...props} title="Busreizen" />} />
      <Route path="/feedback" render={(props) => <Feedback {...props} title="Feedback" />} />

      <Footer />
    </div>
  );
}

export default App;
