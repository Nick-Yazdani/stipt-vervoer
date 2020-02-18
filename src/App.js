import React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';


import Navbar from './components/navbar-component/navbar.component';
import Footer from './components/footer-component/footer.component';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Vip from './pages/Vip';
import Touring from './pages/Touring';
import Busreizen from './pages/Busreizen';
import Feedback from './pages/Feedback';
import NotFound from './pages/404';

import './styles.css';

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="De beste prijzen voor het huren van een touringcar en de leukste voordelige dagtochten en city tours naar London, Antwerpen, Parijs en Duitsland. Vertrek vanuit Amsterdam, Den Haag en Rotterdam."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <Navbar />
        <Route exact path="/" render={(props) => <Home {...props} title="Stipt Vervoer - beste prijzen, leukste reizen" />} />
        <Route path="/contact" render={(props) => <Contact {...props} title="Contact" />} />
        <Route path="/vip-diensten" render={(props) => <Vip {...props} title="VIP Diensten" />} />
        <Route path="/touringcar-verhuur" render={(props) => <Touring {...props} title="Touringcar Verhuur" />} />
        <Route path="/busreizen" render={(props) => <Busreizen {...props} title="Busreizen" />} />
        <Route path="/feedback" render={(props) => <Feedback {...props} title="Feedback" />} />
        <Route path="" render={(props) => <NotFound {...props} title="Pagina Niet Gevonden" />} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
