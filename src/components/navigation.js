import React, { Component } from "react";

const navigation = {
    position: "fixed",
    top: 0,
    width: "100%",
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    zIndex: 999,
    height: 60,
    justifyContent: 'flex-end',
    paddingTop: 12
}

const logo = {
    cursor: 'pointer',
    zIndex: 12,
    fontSize: 24,
    position: 'fixed',
    left: 12,
    top: 12
}

// const yellowColor = {
//     color: '#f2911f'
// }
class NavigationBar extends Component {
    click = () => {
        window.location.href = "/";
    }
    render() {
        return (
            <div style={navigation}>
                <div style={logo} onClick={this.click} className="logo bold pink">Isabella Wang</div>
                {/* <a style={this.props.currentSelect ? yellowColor : null} className="bold navigationMargin" href={this.props.href}>contact</a> */}
              </div>
        )
    }

}

export default NavigationBar;
