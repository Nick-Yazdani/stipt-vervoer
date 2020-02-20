import React from 'react';
import Helmet from 'react-helmet';

import MiddleContent from '../components/middle-content/middle-content.component';
import EndContent from '../components/end-content-component/end-content.component';
import Overlay from '../components/overlay-component/overlay.component';
import Background from '../images/Italie_Venetie.jpg'


import './Touring.styles.css';

const Touring = ({ title }) => {
    return (
        <div>
            <div className="touring">
                <Helmet>
                    <meta
                        name="description"
                        content="Stipt vervoer biedt Nederland het beste in touringcarverhuur tegen een redelijke en concurrerende prijs."
                    />
                    <title>{title}</title>
                </Helmet>
                <Overlay title={"Touringcar verhuur"} caption={"Vertrouwd en comfortabel"} />
            </div>
            <MiddleContent
                headline="Touringcar verhuur"
                content={[
                    "Stipt Vip Vervoer heeft meer dan 30 jaar ervaring in personenvervoer. Wij leveren maatwerk; naar uw wensen organiseren wij busreizen vanuit Amsterdam, Den Haag, Rotterdam en omgeving.",
                    "U kunt vrijblijvend een offerte ontvangen door dit aanvraagformulier in te vullen en op te sturen. Uiteraard kunt u ons ook per e-mail of telefonisch bereiken."
                ]}
            />
            <EndContent backgroundImage={Background}
                        voor={["Complete dagarrangementen voor bijv. speciale evenementen en bedrijven",
                        "Dagtochten en/of meerdaagse reizen voor particulieren, stedentrips voor bijv. scholen of grote groepen",
                        "Vervoer op maat binnen Nederland zoals Schipholvervoer en pendeldiensten"]}
                        waarom={["Onze passie is om de wereld samen met onze klanten te ontdekken",
                        "Busvervoer wordt verricht in een luxe en comfortabele bus die voldoet aan de Euro 6 Normen (milieuvriendelijk)"
                        ,"Professioneel opgeleide en vriendelijke chauffeurs met ruime ervaring streven naar optimaal comfort en veiligheid voor onze klanten."]}
                        />
                        
                </div>
    );
}

export default Touring;