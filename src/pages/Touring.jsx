import React from 'react';

import './Touring.styles.css';

const Vip = () => {
    return (
        <div className="parent-vip">
            <div className="vip-touring">
                <div className="overlay">
                    <div className="big-text">
                        <h1>Touringcar verhuur</h1>
                </div>
                    <div className="smaller-text">
                        Vertrouwd en comfortabel
                </div>
                </div>
            </div>
            <div className="h-block">
                <h3>Touringcar verhuur in Den Haag</h3>
                <div className="p-block">
                    <p>Stipt Vip Vervoer heeft meer dan 30 jaar ervaring in personenvervoer. Wij leveren maatwerk; naar uw wensen organiseren wij busreizen vanuit Amsterdam, Den Haag, Rotterdam en omgeving.</p>
                    <p>U kunt vrijblijvend een offerte ontvangen door dit aanvraagformulier in te vullen en op te sturen. Uiteraard kunt u ons ook per e-mail of telefonisch bereiken.</p>
                </div>
            </div>
            <div className="second-touring">
                <div className="overlay">
                    <div className="secondary-content">
                        <div className="s-1-touring">
                            <h5>Voor Wie?</h5>
                            <ul>
                                <li>Complete dagarrangementen voor bijv. speciale evenementen en bedrijven</li>
                                <li>Dagtochten en/of meerdaagse reizen voor particulieren, stedentrips voor bijv. scholen of grote groepen</li>
                                <li>Vervoer op maat binnen Nederland zoals Schipholvervoer en pendeldiensten</li>
                            </ul>
                        </div>
                        <div className="s-1-touring">
                            <h5>Waarom?</h5>
                            <ul>
                                <li>Onze passie is om de wereld samen met onze klanten te ontdekken</li>
                                <li>Busvervoer wordt verricht in een luxe en comfortabele bus die voldoet aan de Euro 6 Normen (milieuvriendelijk)</li>
                                <li>Professioneel opgeleide en vriendelijke chauffeurs met ruime ervaring streven naar optimaal comfort en veiligheid voor onze klanten.</li>
                            </ul>
                        </div>
                        <div className="s-1-touring">
                            <h5>Aan het slag</h5>
                            <ul>
                                <li>Stuur uw wensen via email naar <a href="mailto:info@stiptvervoer.nl">info@stiptvervoer.nl</a> of gebruik het aanvraagformulier</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vip;