import React from 'react';
import Helmet from 'react-helmet';
import EndContent from '../components/end-content-component/end-content.component'
import MiddleContent from '../components/middle-content/middle-content.component';
import Overlay from '../components/overlay-component/overlay.component';
import Background from '../images/Lloret-de-Mar-2.jpg'

import './Vip.styles.css';

const Vip = ({ title }) => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Stipt vervoer biedt nederland de beste VIP-diensten tegen een redelijke en concurrerende prijs."
                />
                <title>{title}</title>
            </Helmet>
            <div className="vip">
                <Overlay title={"VIP Diensten"} caption={"Professioneel en betrouwbaar"} />
            </div>
            <MiddleContent
                headline="VIP diensten in Den Haag"
                content={[
                    "Stipt Vip Vervoer heeft meer dan 30 jaar ervaring in professioneel vervoer. Wij leveren maatwerk; naar uw wensen organiseren wij VIP en delegatie vervoer in Amsterdam, Den Haag, Rotterdam en omgeving.",
                    "Correct, representatief, geheimhouding verplicht, door justitie gescreened, minstens 5 jaar directiechauffeur ervaring en uiteraard CBR CCVD1 of CCVD2 gediplomeerd. Daar staan wij garant voor wanneer u een gediplomeerd chauffeur bij ons huurt.",
                    "U kunt ook uiteraard studentenchauffeurs inhuren. Onze studentenchauffeurs zijn representatief en volgen of een HBO of een WO opleiding en hebben passie voor autos. Bovendien zijn zij opgeleid en getest door onze gediplomeerde CCVD2 chauffeurs.",
                    "U kunt vrijblijvend een offerte ontvangen door dit aanvraagformulier in te vullen en op te sturen. Uiteraard kunt u ons ook per e-mail of telefonisch bereiken."
                ]}
            />
            <EndContent backgroundImage={Background}
                        voor={
                            [
                                "Professioneel vervoer t.b.v delegaties, congresvervoer en event vervoer", 
                                "Representatieve en Persoonlijke Directievervoer",
                                "Chauffeur diensten voor bedrijven, organisaties en instanties"
                            ]}
                        waarom={
                            [
                                "Stipt VIP vervoer staat voor professioneel, persoonlijk, discreet en betrouwbaar vervoer."
                            ]
                        }
            />
            </div>
    );
}

export default Vip;