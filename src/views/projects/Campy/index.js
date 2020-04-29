import React from "react";
import { Link } from "react-router-dom";

import Navi from "../../../components/navi"
import Paragraph from "../../../components/paragraph"
import Prelude from "../../../components/prelude"
import Bullet from "../../../components/bullet"
import Copyright from "../../../assets/copyright/projects_Copyright.json"
import NavigationBar from "../../../components/navigation"

import pro1 from "../../../assets/images/campy/logo.png"
import pro2 from "../../../assets/images/campy/userResearch.jpg"
import pro3 from "../../../assets/images/campy/richPicture.jpg"
import pro4 from "../../../assets/images/campy/ideas.png"
import pro5 from "../../../assets/images/campy/value.png"

import de1 from "../../../assets/images/campy/experiment.png"
import de2 from "../../../assets/images/campy/sketch.png"
import de3 from "../../../assets/images/campy/prototype.png"
import de4 from "../../../assets/videos/campy.mov"

import $ from 'jquery';

const container={
    top:60,
    position:'fixed',
    width:'100%',
    overflow:'scroll',
    height:"95vh"
}

class Recruitment extends React.Component {


    onClick = (e) => {
        e.preventDefault();
        const selectPosition = $(".p" + e.target.className).position().top;
        $('#campy').animate({ scrollTop: selectPosition }, 700);

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
        this.scrollCheck($('#campy').scrollTop())

    }

    render() {
        return (
            <div id="campy" style={container} onScroll={this.handleScroll}>
                   <NavigationBar />
                <Navi />

                {/* navigation bar ==============================================================================================  */}
                <div id="navi" className="animated slideInDown">
                    <div id="content">
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
                                
                            {Copyright.campy.otherProjects.map((item, index) => {
                                    return (
                                        <Link key={index} to={item.link}>{item.name}<br /></Link>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>
                </div>
                {/*contect itself ==============================================================================================                  */}
                <div id="info">
                    <Prelude
                        descrip={Copyright.campy.descrip}
                        name={Copyright.campy.name}
                        challenge={Copyright.campy.challenge}
                        myrole={Copyright.campy.myrole}
                        for={Copyright.campy.for} />

                    <Paragraph banner={pro1} title={Copyright.campy.title[0]} val="pp0" class="pp0">
                        <p>
                            Hiring skilled and qualified professionals is imperative to the success of any company. However, <span className='bold'>the recruitment is broken on both company and candidate sides. </span>
                            <br /><br /><span className='bold'>For recruiters: </span> according to First Round Capital's survey, "Hireing good people" is what keeps 66% Startup CEOs and founders up at night.
                            <br /><br /><span className='bold'>For candidates: </span> they often suffer from the "Resume black hole", misalignments and drawn-out process.
                        </p>

                    </Paragraph>

                    <Paragraph banner={pro2} title={Copyright.campy.title[1]} val="pp1" class="pp1">
                        <p> 
                        {Copyright.campy.content[0]}
                        </p>

                    </Paragraph>


                    <Paragraph banner={pro3} title={Copyright.campy.title[2]} val="pp2" class="pp2">
                        <p>A general research of the recruitment process and landscape of recruitment softwares.</p>

                    </Paragraph>

                    <Paragraph banner={pro4} title={Copyright.campy.title[3]} val="pp3" class="pp3">
                        <p> Base on the research take away, we started to generate ideas that solve the pain point.
                            <br /><br />We all generated 30 ideas base on the research result and gathered together to select best 3 from voting, making pitches and analyzing.
                            Our Top 3 ideas were:
                            <Bullet a="Renting industry experts insights" />
                            <Bullet a="Tinder for Jobs" />
                            <Bullet a="Transparent and time restricted recruitment process" />
                        </p>
                    </Paragraph>

                    <Paragraph banner={pro5} title={Copyright.campy.title[4]} val="pp4" class="pp4">
                        <p> </p>
                    </Paragraph>

                    <Paragraph banner={de1} title={Copyright.campy.title[5]} val="pp5" class="pp5">
                        <p>We conducted 3 experiments to validate the value proposition.</p>
                    </Paragraph>

                    <Paragraph banner={de2} title={Copyright.campy.title[6]} val="pp6" class="pp6">
                        <p></p>
                    </Paragraph>

                    <br /> <br /> <br />




                    <Paragraph banner={de3} title={Copyright.campy.title[7]} val="pp7" class="pp7">
                    <p> We used github to work together on coding.
                        
                        </p>
                    </Paragraph>

                    <Paragraph video={de4} title={Copyright.campy.title[8]} val="pp8" class="pp8">
                        <p> 
                        </p>
                    </Paragraph>
                    <br /><br /><br /><br />

                </div>
            </div>
        );
    }
}

export default Recruitment;