import React from 'react';
import Helmet from 'react-helmet';

import Overlay from '../components/overlay-component/overlay.component';

import './Home.styles.css';

const Home = ({ title }) => {
    return (
        <div className="home">
            <Helmet>
                <title>{title}</title>
                <meta
                    name="description"
                    content="De beste prijzen voor het huren van een touringcar en de leukste voordelige dagtochten en city tours naar London, Antwerpen, Parijs en Duitsland. Vertrek vanuit Amsterdam, Den Haag en Rotterdam."
                />
            </Helmet>
            <Overlay title="Stipt Vervoer" caption="Beste Prijzen, Leukste Reizen" />
        </div>
    );
}

export default Home;