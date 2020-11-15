import React from "react";
import Tilt from 'react-tilt'
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
    return (
        <>
        <div className='ma4 mt0'>

        </div>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} src={brain} alt="brain_image"/></div>
        </Tilt>
        </>
    );
}

export default Logo;