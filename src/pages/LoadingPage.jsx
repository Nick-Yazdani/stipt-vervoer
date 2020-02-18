import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingPage = () => {
    return (
        <div style={{height: "80vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
}
 
export default LoadingPage;