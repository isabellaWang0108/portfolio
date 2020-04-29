import React, { Component } from "react";
import $ from 'jquery';

class Navi extends Component {

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    componentDidMount() {
        window.addEventListener('resize', this.width, true);

    }
    width = () => {
        if (window.innerWidth < 700) {
            $("#navi").css("display", "none");
            $(document).on("click", "li", function () {
                $("#navi").css("display", "none");
                $(".dropdown").text("Project Navigation");
            })
        }
        if (window.innerWidth > 700) {
            $("#navi").css("display", "block");
            $(document).on("click", "li", function () {
                $("#navi").css("display", "block");
                $(".dropdown").text("Project Navigation");
            })
        }
    }
    navishow = (e) => {
        e.preventDefault();
        if ($("#navi").css("display") === "block") {
            $("#navi").css("display", "none");
            $(".dropdown").text("Project Navigation");
        }
        else if ($("#navi").css("display") === "none") {
            $("#navi").css("display", "block");
            $(".dropdown").text("click to close");
        }
    }

    render() {
        return (
            <div className="mobile-navi">
                <button onClick={this.navishow} className="dropdown">Project Navigation</button>
            </div>
        )
    }

}

export default Navi;
