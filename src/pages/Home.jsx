import React from 'react';
import Helmet from 'react-helmet';

import Overlay from '../components/overlay-component/overlay.component';

import './Home.styles.css';

const Home = ({ title }) => {
    return (
        <div className="home">
            <Helmet>
                <meta
                    name="description"
                    content="Stipt vervoer bieden het beste in busverhuur, chauffeursdiensten, VIP-diensten en vervoer. Als u concurrerend geprijsde transportdiensten of bus- en touringcardiensten nodig hebt, heeft Stipt vervoer u gedekt."
                />
                <title>{title}</title>

            </Helmet>
            <Overlay title="Stipt Vervoer" caption="Beste Prijzen, Leukste Reizen" />
        </div>
    );
}

export default Home;