import React from "react";
import { Link } from "react-router-dom";

import Navi from "../../../components/navi"
import Paragraph from "../../../components/paragraph"
import Prelude from "../../../components/prelude"
import Bullet from "../../../components/bullet"
import Copyright from "../../../assets/copyright/projects_Copyright.json"
import NavigationBar from "../../../components/navigation"

import CampyFeature from "../../../assets/images/Thesis/landingPg.png"
// import pro1 from "../../../assets/images/campy/logo.png"
import $ from 'jquery';

const container={
    top:'3em',
    position:'fixed',
    width:'100%',
    overflow:'scroll',
    height:"95vh"
}

class Recruitment extends React.Component {


    onClick = (e) => {
        e.preventDefault();
        const selectPosition = $(".p" + e.target.className).position().top;
        $('#ThesisCampy').animate({ scrollTop: selectPosition }, 700);

    }


    turnPink = (theclass) => {
        $("." + theclass).css("color", "#FC2293")
            .css("text-decoration", "underline")
            .css("font-weight", "bold")
    }
    neutral = () => {
        $("li").css("color", "black")
            .css("text-decoration", "none")
            .css("font-weight", "normal")
    }

    scrollCheck(thePosition) {
        // for all the item in the menu except for the last one\
        for (var i = 0; i < Copyright.campy.title.length - 1; i++) {
            if (thePosition > $(".pp" + i).position().top - 120 && thePosition < $(".pp" + (i + 1)).position().top) {
                this.neutral();
                this.turnPink('p' + i);
            }
        }

        // for the last item in the menu
        if (thePosition > $(".pp" + (Copyright.campy.title.length - 1)).position().top) {
            this.neutral();
            this.turnPink('p' + (Copyright.campy.title.length - 1));
        }
    }
    handleScroll = e => {
        e.preventDefault();
        this.scrollCheck($('#ThesisCampy').scrollTop())

    }

    render() {
        return (
            <div id="ThesisCampy" style={container} onScroll={this.handleScroll}>
                   <NavigationBar />
                <Navi />

                {/* navigation bar ==============================================================================================  */}
                <div id="navi" className="animated slideInDown">
                    <div id="content" style={{ background: '#dbe9f9'}}>
                        <ul>Process
                        {Copyright.campy.title.map((item, index) => {
                            return (
                                <li key={index} onClick={this.onClick} className={"p" + index}>{item}
                                </li>
                            )
                        })}
                        </ul>

                        <div id="recommend">
                            <br />
                            <ul>More projects<br />
                            </ul>
                        </div>

                    </div>
                </div>
                {/*contect itself ==============================================================================================                  */}
                <div id="info">
                    <Prelude
                    imgSrc={CampyFeature}
                        descrip={Copyright.campy.descrip}
                        name={Copyright.campy.name}
                        for={Copyright.campy.for} />

                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[0]} val="pp0" class="pp0">
                        <p>
                           hello </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[1]} val="pp1" class="pp1">
                        <p>
                            hi  </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[2]} val="pp2" class="pp2">
                        <p>
                            hi  </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[3]} val="pp3" class="pp3">
                        <p>
                            hi  </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[4]} val="pp4" class="pp4">
                        <p>
                            hi  </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[5]} val="pp5" class="pp5">
                        <p>
                            hi  </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[6]} val="pp6" class="pp6">
                        <p>
                            hi  </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[7]} val="pp7" class="pp7">
                        <p>
                            hi  </p>

                    </Paragraph>
                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[8]} val="pp8" class="pp8">
                        <p>
                            hi  </p>

                    </Paragraph>

                   
                    <br /><br /><br /><br />

                </div>
            </div>
        );
    }
}

export default Recruitment;