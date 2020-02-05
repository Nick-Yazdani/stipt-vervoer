import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navbar-component/navbar.component';
import Footer from './components/footer-component/footer.component';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Vip from './pages/Vip';
import Touring from './pages/Touring';

import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/vip-diensten" component={Vip} />
      <Route path="/touringcar-verhuur" component={Touring} />
      <Footer />
    </div>
  );
}

export default App;
