import React from 'react';
import Helmet from 'react-helmet';

import Overlay from '../components/overlay-component/overlay.component';

import './Home.styles.css';

const Home = ({ title }) => {
    return (
        <div className="home">
            <Helmet><title>{title}</title></Helmet>
            <Overlay title="Oops!" caption="Deze pagina kon niet gevonden worden."/>
        </div>
    );
}

export default Home;