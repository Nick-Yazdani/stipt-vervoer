import React from 'react';

import Card from './card-component/card.component';

class BusreizenContainer extends React.Component {
    state = { 
        trips: []
     }
    componentDidMount = async () => {
        const response = await fetch('https://stiptvervoer.com/trips');
        const parsedResponse = await response.json();
        this.setState({trips: parsedResponse});
    }
    render() { 
        return (
            <div className="cont" style={{display: "flex", flexWrap: "wrap", padding: "1rem", backgroundColor: "rgba(0,0,0,0.9)", justifyContent: "center"}}>
                {this.state.trips ? this.state.trips.map(post => { return <Card 
                                                                            key={post.id}
                                                                            param={post.id}
                                                                            caption={post.title} 
                                                                            image={post.imageurl}
                                                                            alt={post.imagename} 
                                                                            />
                                                                            }) : null}
            </div>
        );
    }
}
 
export default BusreizenContainer;