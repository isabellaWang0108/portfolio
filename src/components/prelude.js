import React from "react";
class Prelude extends React.Component {

    render() {
        const bottom = {
            marginBottom: '4em'
        }
        return (
            <div>
                <h1 className="bold h-28px">{this.props.name}</h1>
                <p className="grey">{this.props.descrip}</p>
                <img src={this.props.imgSrc} alt="featureshot" style={{ width: "100%" }}></img>
                <p><span className="bold">Challenge :&nbsp;  </span>{this.props.challenge}</p>
                <p ><span className="bold">Type :&nbsp;  </span>{this.props.for}</p>
                <p style={bottom}><span className="bold">My core duties :&nbsp;  </span>
                    {this.props.myrole.map((item, index) => {
                        return (<span style={{ lineHeight: 1.5 }} key={index}>
                            <br />&bull; &nbsp; {item}</span>)
                    })}
                </p >
            </div>

        );
    }
}

export default Prelude;
