import React from "react";
class Paragraph extends React.Component {

    render() {
        const img = {
            width: '100%',
            marginTop: 12,
        }
        const video = {
            width: '100%',
            marginBottom: 42
        }
        return (
            <div style={{ marginBottom: 84}} className={this.props.val}>
                <h1 className="pink" value={this.props.val}>{this.props.title}</h1>
                {this.props.children}
                {this.props.noImg ?
                    null :
                    this.props.banner ? <img style={img} alt=" " src={this.props.banner}></img>
                        : <video style={video} controls><source src={this.props.video} type='video/mp4' /></video>
                }
            </div>

        );
    }
}

export default Paragraph;
