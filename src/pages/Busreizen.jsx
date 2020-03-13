import React from 'react';
import Helmet from 'react-helmet';

import BusreizenComponent from '../components/busreizen-component/busreizen.component';
import Overlay from '../components/overlay-component/overlay.component';

import './Busreizen.styles.css';

const Busreizen = ({ title }) => {
    return (
        <div>
            <div className="busreizen">
                <Helmet>
                    <title>{title}</title>
                    <meta name="description"
                          content="Je kunt onze huidige en laatste busreizen op deze pagina vinden. Stipt vervoer heeft deze pagina regelmatig bijgewerkt met onze bustours naar bestemmingen in Europa."
                    ></meta>
                </Helmet>
                <Overlay title="Dagtochten &amp; Busreizen" caption="Onvergetelijke dagtochten &amp; busreizen voor jong en oud." />
            </div>
            <BusreizenComponent />
        </div>
    );
}

export default Busreizen;