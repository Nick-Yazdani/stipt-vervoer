import React from 'react';

import Card from './card-component/card.component';

class BusreizenContainer extends React.Component {
    state = { 
        posts: ''
     }
    componentDidMount = async () => {
        const response = await fetch('https://stiptvervoer.com/posts');
        const parsedResponse = await response.json();
        this.setState({posts: parsedResponse}, () => {
            console.log(this.state.posts)
        });
    }
    render() { 
        return (
            <div className="cont" style={{display: "flex", flexWrap: "wrap", padding: "1rem", backgroundColor: "rgba(0,0,0,0.9)", justifyContent: "center"}}>
                {this.state.posts ? this.state.posts.map(post => { return <Card 
                                                                            key={post.title}
                                                                            caption={post.title} 
                                                                            image={post.imageurl} 
                                                                            reisduur={post.reisduur}
                                                                            vervoer={post.vervoer}
                                                                            vakantietype={post.vakantietype}
                                                                            groepsgrootte={post.groepsgrootte}
                                                                            bestemming={post.bestemming}
                                                                            price={post.price}
                                                                            category={post.category}
                                                                            location= {post.location}
                                                                            />
                                                                            }) : null}
            </div>
        );
    }
}
 
export default BusreizenContainer;