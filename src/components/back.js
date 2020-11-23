import React from "react";
import Arrowback from '../assets/icons/arrow_back.svg'


class Back extends React.Component {

    Goback = () => {
        window.history.back();
    }

    render() {

        return (
            <p  style={{ marginLeft: 12,paddingBottom:12, cursor: 'pointer' }} onClick={this.Goback}> 
                <img src={Arrowback}/> Go back</p>
        );
    }
}

export default Back;
