import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.css';
import Helmet from 'react-helmet';
import Navbar from './components/navbar-component/navbar.component';
import Footer from './components/footer-component/footer.component';
import LoadingPage from './pages/LoadingPage';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Vip = lazy(() => import('./pages/Vip'));
const Touring = lazy(() => import('./pages/Touring'));
const Busreizen = lazy(() => import('./pages/Busreizen'));
const Feedback = lazy(() => import('./pages/Feedback'));
const NotFound = lazy(() => import('./pages/404'));
const Details = lazy(() => import('./pages/Details'));

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
          <Route exact path="/" render={(props) => <Home {...props} title="Stipt Vervoer - Beste prijzen, leukste reizen" />} />
          <Route path="/contact" render={(props) => <Contact {...props} title="Stipt Vervoer - Contact" />} />
          <Route path="/vip-diensten" render={(props) => <Vip {...props} title="Stipt Vervoer - VIP Diensten" />} />
          <Route path="/touringcar-verhuur" render={(props) => <Touring {...props} title="Stipt Vervoer - Touringcar Verhuur" />} />
          <Route exact path="/busreizen" render={(props) => <Busreizen {...props} title="Stipt Vervoer - Busreizen" />} />
          <Route path="/busreizen/:id" render={(props) => <Details {...props} title="Stipt Vervoer - Busreizen" />} />
          <Route path="/feedback" render={(props) => <Feedback {...props} title="Stipt Verover - Feedback" />} />
          <Route path="" render={(props) => <NotFound {...props} title="Pagina Niet Gevonden" />} />
        </Switch>
        </Suspense>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
