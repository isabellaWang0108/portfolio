import React from "react";
import VentureBG from "../assets/images/home/ventureBG.svg"
import $ from 'jquery';

const blackBackground = {
    backgroundColor: 'black',
    position: 'fixed',
    height: '100vh',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1
}
const matrixContainer = {
    position: 'fixed',
    width: "100%",
    height: '100vh',
    color: '#024E05',
    fontSize: 9,
    flexWrap: 'wrap',
    fontFamily: 'Menlo'


}
const matrixContainerEnd={
    position: 'fixed',
    top:60,
    width: "100%",
    height: '100vh',
    color: '#024E05',
    fontSize: 9,
    flexWrap: 'wrap',
    fontFamily: 'Menlo'
}
const ventureBG = {
    backgroundColor: 'white',
    position: 'fixed',
    height: '100vh',
    width: '100%',
    bottom: 0,
    left: 0,
    zIndex: 1
}

class LandingPageAnimation extends React.Component {


    constructor() {
        super()
        this.state = {
            number: this.randomNumGeneration()
        }
        setInterval(() => {
            this.setState({ number: this.randomNumGeneration() })
        }, 1000)
    }


    componentDidMount(){
        $(".wave1").append(<p>hi</p>)
    }
    randomNumGeneration() {
        const numCollection = []
        for (var i = 0; i < 10000; i++) {
            numCollection.push(Math.floor(Math.random() * 10) === 0 ? '.' : Math.floor(Math.random() * 10))
        }

        return numCollection;
    }
    render() {
        switch (this.props.backgroundNmb) {
            case 0:
                return (
                    <div>
                    <div id="matrix" style={blackBackground}>
                        <div style={matrixContainer}>
                            {this.state.number.join(' ')}
                        </div>

                    </div>
                    </div>

                );
            case 1:
                return (
                    <div style={ventureBG}>
                        <img src={VentureBG} style={{ bottom: 0, position: 'absolute' }} alt="ventureBG"></img>
                    </div>

                );

            case 2:
                return (
                    <div  className="white" style={blackBackground}>
                         <div style={matrixContainerEnd}>
                            {this.state.number.join(' ')}
                        </div>
                    </div>

                );

            default:
            // code block
        }

    }
}

export default LandingPageAnimation;
