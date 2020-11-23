import React, { Component } from "react";
import { Link } from "react-router-dom";

const navigation = {
    position: "fixed",
    top: 0,
    width: "100%",
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    zIndex: 999,
    height: window.innerWidth > 450 ? 60 : 50,
    justifyContent: 'flex-end',
    paddingTop: 12,
}

const logo = {
    cursor: 'pointer',
    zIndex: 60,
    fontSize: 24,
    position: 'fixed',
    left: 12,
    top: 12,
    backgroundColor:'transparent'
}

// const yellowColor = {
//     color: '#f2911f'
// }
class NavigationBar extends Component {
    Logoclick = () => {
        window.location.href = "/";
    }
    render() {
        return (
            <div onClick={this.props.onClick} style={navigation}>
                {/* logo */}
                <div style={logo} onClick={this.Logoclick} className="logo bold pink">Isabella Wang</div>
                {/* contact button */}
                    <Link  style={{textDecoration:'none'}} to="/contact">
                        <h2 className="bold pink navigationMargin">About me</h2>
                    </Link>
            </div>
        )
    }

}

export default NavigationBar;
