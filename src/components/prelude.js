import React from "react";
class Prelude extends React.Component {

    render() {
        return (
            <div style={{marginTop:"4em", marginBottom: '4em'}}>
                {/* name */}
                <h1 className="bold h-28px">{this.props.name}</h1>
                {/* description */}
                <p className="grey">{this.props.descrip}</p>
                {/* image source */}
                <img src={this.props.imgSrc} alt="featureshot" style={{ width: "100%" }}></img>
                {/* challenge */}
                {this.props.challenge ? <p><span className="bold">Challenge :&nbsp;  </span>{this.props.challenge}</p> : null}
                {/* type */}
                {this.props.for ? <p ><span className="bold">Type :&nbsp;  </span>{this.props.for}</p> : null}
                {/* duties */}
                {this.props.myrole ? <p ><span className="bold">My core duties :&nbsp;  </span>
                    {this.props.myrole.map((item, index) => {
                        return (<span style={{ lineHeight: 1.5 }} key={index}>
                            <br />&bull; &nbsp; {item}</span>)
                    })}
                </p > : null}
            </div>

        );
    }
}

export default Prelude;
