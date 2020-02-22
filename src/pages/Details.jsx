import React from 'react';
import Loader from 'react-loader-spinner';
import Helmet from 'react-helmet';
import './Details.css';

class Details extends React.Component {
    state = {
        OpstData: [],
        TripData: '',
        VertrekData: []
    }
    componentDidMount = async () => {
        const response1 = await fetch(`https://www.stiptvervoer.com/trips/${this.props.match.params.id}`);
        const parsedResponse1 = await response1.json();
        this.setState({ TripData: parsedResponse1 }, () => {
            window.scrollTo(0, 0);
        })

        const response2 = await fetch(`https://www.stiptvervoer.com/opstapplaatsen/${this.props.match.params.id}`);
        const parsedResponse2 = await response2.json();
        this.setState({ OpstData: parsedResponse2 });
        
        const response3 = await fetch(`https://www.stiptvervoer.com/vertrekdata/${this.props.match.params.id}`);
        const parsedResponse3 = await response3.json();
        this.setState({ VertrekData: parsedResponse3 });
    }
    render() {
        return this.state.TripData.length > 0 ? (
            <React.Fragment>
                <Helmet>
                    <title>Stipt Vervoer - {this.state.TripData[0].title}</title>
                    <meta
                    name="description"
                    content={this.state.TripData[0].highlights}
                />
                </Helmet>
            <div className="details">
                <h1 style={{textAlign: "center", padding: "1rem"}}>{this.state.TripData[0].title} - {this.state.TripData[0].price}</h1>

                {/* image here */}
                <div className="padme">
                <h3>Highlights</h3>
                <p>{this.state.TripData[0].highlights}</p>
                </div>

                <div className="padme">
                <h3>Programma: Dagtocht</h3>
                <p>{this.state.TripData[0].program}</p>
                </div>

                <div className="padme">

                <h3>Opstapplaatsen</h3>
                {this.state.OpstData.map(item => {
                    if(item.address !== 'none') {
                    return (
                        <div key={item.id} style={{marginTop: "1rem"}}>
                            <h3>{item.city}</h3>
                            <p><strong>{item.uur} uur</strong></p>
                            <p>{item.address}</p>
                        </div>
                    )
                    }
                    else {
                        return (
                            <div key={item.id} style={{marginTop: "1rem"}}>
                                <h3>{item.city}</h3>
                                <p>{item.notes}</p>
                            </div>
                        )
                    }
                })}
                </div>

                <div className="padme">
                <h3>Vertrekdata: {this.state.TripData[0].date}</h3>
                <h3 style={{marginTop: "1rem"}}>Inclusief</h3>
                {this.state.VertrekData.map(item => {
                    return (
                    <ul key={item.inclusief}>
                        <li style={{padding: "0.5rem 0"}}>{item.inclusief}</li>
                    </ul>
                    )
                })}
                </div>
                <div className="padme">
                <h3>Exclusief</h3>
                {this.state.VertrekData.map(item => {
                    return (
                    <ul key={item.exclusief}>
                        <li style={{padding: "0.5rem 0"}}>{item.exclusief}</li>
                    </ul>
                    )
                })}
                </div>
                <div className="padme">
                <h3>Alegmene informatie</h3>
                </div>
                <div className="padme">
                <h3>Reis- en annuleringsverzekering</h3>
                <p>{this.state.TripData[0].annuleringsverzerking}</p>
                </div>
                <div className="padme">
                <h3>Paspoort, identiteitskaart of visum</h3>
                <p>{this.state.TripData[0].paspoort}</p>
                </div>

                <div className="padme">
                <h3>Bagage labelen</h3>
                <p>{this.state.TripData[0].bagage}</p>
                </div>
                <div className="padme">
                <h3>Geld</h3>
                <p>{this.state.TripData[0].geld}</p>
                </div>
                <div className="padme">
                <h3>Tijdsverschil</h3>
                <p>{this.state.TripData[0].tijdsverschil}</p>
                </div>
            </div>
            </React.Fragment>
        ) :  <div style={{height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <Loader 
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
        />
    </div>;
    }
}

export default Details;