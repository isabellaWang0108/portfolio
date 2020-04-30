import React from "react";
import { Link } from "react-router-dom";

import Navi from "../../../components/navi"
import Paragraph from "../../../components/paragraph"
import Prelude from "../../../components/prelude"
import Bullet from "../../../components/bullet"
import Copyright from "../../../assets/copyright/projects_Copyright.json"
import NavigationBar from "../../../components/navigation"

import CampyFeature from "../../../assets/images/Thesis/landingPg.png"

import Cyborg from "../../../assets/images/Thesis/cyborg.gif"
import Gallary1 from "../../../assets/images/Thesis/gallery1.jpg"
import Gallary2 from "../../../assets/images/Thesis/gallery2.jpg"
import SuperHuman from "../../../assets/images/Thesis/superHuman.gif"
import Clippy from "../../../assets/images/Thesis/clippy.jpg"
import Sketch1 from "../../../assets/images/Thesis/sketch1.jpg"
import Sketch2 from "../../../assets/images/Thesis/sketch2.jpg"
import Sketch3 from "../../../assets/images/Thesis/sketch3.jpg"
import Campy from "../../../assets/images/home/logoCampy.gif"

import $ from 'jquery';

const container = {
    top: '3em',
    position: 'fixed',
    width: '100%',
    overflow: 'scroll',
    height: "95vh"
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
                    <div id="content" style={{ background: '#dbe9f9' }}>
                        <ul>Process
                        {Copyright.campy.title.map((item, index) => {
                            return (
                                <li key={index} onClick={this.onClick} className={"p" + index}>{item}
                                </li>
                            )
                        })}
                        </ul>
                        {/* 
                        <div id="recommend">
                            <br />
                            <ul>More projects<br />
                            </ul>
                        </div> */}

                    </div>
                </div>
                {/*contect itself ==============================================================================================                  */}
                <div id="info">
                    <Prelude
                        imgSrc={CampyFeature}
                        descrip={Copyright.campy.descrip}
                        name={Copyright.campy.name}
                        for={Copyright.campy.for} />

                    <Paragraph banner={Cyborg} title={Copyright.campy.title[0]} val="pp0" class="pp0">
                        <p>
                            {Copyright.campy.paragraph1} </p>

                    </Paragraph>
                    <Paragraph noImg={true} title={Copyright.campy.title[1]} val="pp1" class="pp1">
                        <p>
                            {Copyright.campy.paragraph2}  </p>

                        <Bullet
                            a="Firedrop"
                            b="Design Scape"
                            c="CycleGen"
                            d="The Grid"
                            e="Color wheel"
                        />
                        <br />
                        <a href="https://wangxbella.tumblr.com/post/616766731539693568/thesis-case-studies-ai-computer-vision-based"
                            target="_blank" rel="noopener noreferrer">
                            Read detailed case studies
                        </a>


                    </Paragraph>
                    <Paragraph noImg={true} title={Copyright.campy.title[2]} val="pp2" class="pp2">
                        <p>{Copyright.campy.paragraph3}  </p>
                        <a href="https://wangx733.github.io/IdealationVote/">Link to website</a>
                        <iframe src="https://wangx733.github.io/IdealationVote/"
                            allowFullScreen
                            title="ideationVote"
                            // sandbox="allow-same-origin"
                            height={400}
                            width="100%"></iframe>

                    </Paragraph>
                    <Paragraph banner={Gallary2} title={Copyright.campy.title[3] + " – data visualization"} val="pp3" class="pp3">
                        <br />
                        <img src={Gallary1} width="100%" alt="gallery1" />
                        <p>{Copyright.campy.paragraph4}</p>


                    </Paragraph>
                    <Paragraph noImg={true} title={Copyright.campy.title[4]} val="pp4" class="pp4">
                        <p>{Copyright.campy.paragraph5}</p>
                        <a href="https://wangx733.github.io/3Dprogramming/"
                            target="_blank" rel="noopener noreferrer">
                            View it fullscreen
                            </a>
                        <iframe src="https://wangx733.github.io/3Dprogramming/"
                            allowFullScreen
                            title="see as data scientist"
                            // sandbox="allow-same-origin"
                            height={400}
                            width="100%">
                        </iframe>
                    </Paragraph>

                    <Paragraph banner={SuperHuman} title={Copyright.campy.title[5]} val="pp5" class="pp5">
                        <p>
                            {Copyright.campy.paragraph6}  </p>

                    </Paragraph>
                    <Paragraph banner={Clippy} title={Copyright.campy.title[6]} val="pp6" class="pp6">
                        <p>
                            {Copyright.campy.paragraph7}  </p>
                        <a href="https://docs.google.com/document/d/1_LSWvOic1HyqWGW9-ZP-Ho2nomlBlf-oaXSkA5rZ4gQ/edit?usp=sharing"
                            target="_blank" rel="noopener noreferrer"> Read the paper</a>

                    </Paragraph>
                    <Paragraph banner={Sketch1} title={Copyright.campy.title[7]} val="pp7" class="pp7">
                        <p>{Copyright.campy.paragraph8}  </p>
                    </Paragraph>
                    <Paragraph banner={Sketch2} >
                        <p>A further refinement from the ideation. </p>
                    </Paragraph>
                    <Paragraph banner={Sketch3} >
                        <p>Any other options? </p>
                    </Paragraph>

                    <Paragraph banner={CampyFeature} title={Copyright.campy.title[8]} val="pp8" class="pp8">
                        <p>{Copyright.campy.paragraph9}  </p>
                        <a href="https://thesiscampy.webflow.io"
                            target="_blank" rel="noopener noreferrer">
                            See product
                            </a>

                    </Paragraph>
                    <Paragraph noImg={true} title={Copyright.campy.title[9]} val="pp9" class="pp9">
                        <p>{Copyright.campy.paragraph10} </p>
                        <img src={Campy} width="40%" alt="campy"></img>
                        <br /><br /><br /><br /><br />

                        <Link to="/"> View other projects >></Link>
                    </Paragraph>


                    <br /><br /><br /><br />


                </div>
            </div>
        );
    }
}

export default Recruitment;