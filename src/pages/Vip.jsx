import React from 'react';

import './Vip.styles.css';

const Vip = () => {
    return (
        <div className="parent-vip">
            <div className="vip">
                <div className="overlay">
                    <div className="big-text">
                        <h1>VIP vervoer</h1>
                </div>
                    <div className="smaller-text">
                        Professioneel en betrouwbaar
                </div>
                </div>
            </div>
            <div className="h-block">
                <h3>VIP diensten in Den Haag</h3>
                <div className="p-block">
                    <p>Stipt Vip Vervoer heeft meer dan 30 jaar ervaring in professioneel vervoer. Wij leveren maatwerk; naar uw wensen organiseren wij VIP en delegatie vervoer in Amsterdam, Den Haag, Rotterdam en omgeving.</p>
                    <p>Correct, representatief, geheimhouding verplicht, door justitie gescreened, minstens 5 jaar directiechauffeur ervaring en uiteraard CBR CCVD1 of CCVD2 gediplomeerd. Daar staan wij garant voor wanneer u een gediplomeerd chauffeur bij ons huurt.</p>
                    <p>U kunt ook uiteraard studentenchauffeurs inhuren. Onze studentenchauffeurs zijn representatief en volgen of een HBO of een WO opleiding en hebben passie voor autos. Bovendien zijn zij opgeleid en getest door onze gediplomeerde CCVD2 chauffeurs.</p>
                    <p>U kunt vrijblijvend een offerte ontvangen door dit aanvraagformulier in te vullen en op te sturen. Uiteraard kunt u ons ook per e-mail of telefonisch bereiken.</p>
                </div>
            </div>
            <div className="second">
                <div className="overlay">
                    <div className="secondary-content">
                        <div className="s-1">
                            <h5>Voor Wie?</h5>
                            <ul>
                                <li>Professioneel vervoer t.b.v delegaties, congresvervoer en event vervoer</li>
                                <li>Representatieve en Persoonlijke Directievervoer</li>
                                <li>Chauffeur diensten voor bedrijven, organisaties en instanties</li>
                            </ul>
                        </div>
                        <div className="s-1">
                            <h5>Waarom?</h5>
                            <ul>
                            <li>Stipt VIP vervoer staat voor professioneel, persoonlijk, discreet en betrouwbaar vervoer.</li>
                            </ul>
                        </div>
                        <div className="s-1">
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