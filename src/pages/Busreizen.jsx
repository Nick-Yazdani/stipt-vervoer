import React from 'react';
import Helmet from 'react-helmet';

import BusreizenComponent from '../components/busreizen-component/busreizen.component';
import Overlay from '../components/overlay-component/overlay.component';

import './Busreizen.styles.css';

const Busreizen = ({ title }) => {
    return (
        <div>
            <div className="busreizen">
                <Helmet><title>{title}</title></Helmet>
                <Overlay title="Busreizein" caption="De beste busreizen in Nederland." />
            </div>
            <BusreizenComponent />
        </div>
    );
}

export default Busreizen;