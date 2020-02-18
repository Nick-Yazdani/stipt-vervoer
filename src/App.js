import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
import Helmet from 'react-helmet';
import Navbar from './components/navbar-component/navbar.component';
import Footer from './components/footer-component/footer.component';
import LoadingPage from './pages/LoadingPage';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const Vip = lazy(() => import('./pages/Vip'))
const Touring = lazy(() => import('./pages/Touring'))
const Busreizen = lazy(() => import('./pages/Busreizen'))
const Feedback = lazy(() => import('./pages/Feedback'))
const NotFound = lazy(() => import('./pages/404'))

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <Navbar />
        <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} title="Stipt Vervoer - beste prijzen, leukste reizen" />} />
          <Route path="/contact" render={(props) => <Contact {...props} title="Contact" />} />
          <Route path="/vip-diensten" render={(props) => <Vip {...props} title="VIP Diensten" />} />
          <Route path="/touringcar-verhuur" render={(props) => <Touring {...props} title="Touringcar Verhuur" />} />
          <Route path="/busreizen" render={(props) => <Busreizen {...props} title="Busreizen" />} />
          <Route path="/feedback" render={(props) => <Feedback {...props} title="Feedback" />} />
          <Route path="" render={(props) => <NotFound {...props} title="Pagina Niet Gevonden" />} />
        </Switch>
        </Suspense>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
