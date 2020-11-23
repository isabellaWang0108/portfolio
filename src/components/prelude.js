import React from "react";
class Prelude extends React.Component {

    render() {
        return (
            <div style={{ marginTop: "2em", marginBottom: '4em' }}>
                {/* name */}
                <h2 className="bold h-28px">{this.props.name}</h2>
                  {/* challenge */}
                  {this.props.challenge ? <p className="grey">{this.props.challenge}</p>:null}
              
                {/* image source */}
                <img src={this.props.imgSrc}  style={{ width: "100%", marginTop:'16px'}}></img>
            </div>

        );
    }
}

export default Prelude;
