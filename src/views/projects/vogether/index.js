import React from "react";
import { Link } from "react-router-dom";


import Paragraph from "../../../components/paragraph"
import Prelude from "../../../components/prelude"
// import Bullet from "../../../components/bullet"
import Navi from "../../../components/navi"
import Copyright from "../../../assets/copyright/projects_Copyright.json"
import NavigationBar from "../../../components/navigation"

// import pro1 from "./logo.png"
import pro2 from "../../../assets/images/vogether/competitor.png"
import pro3 from "../../../assets/images/vogether/workflow.png"
import pro4 from "../../../assets/images/vogether/1-emotion.gif"
import pro5 from "../../../assets/images/vogether/2-record.gif"
import pro6 from "../../../assets/images/vogether/3-chat.gif"
import pro7 from "../../../assets/images/vogether/4-share.jpg"
import pro8 from "../../../assets/images/vogether/5-reaction.gif"
import pro9 from "../../../assets/images/vogether/hi.jpeg"


import de1 from "../../../assets/images/vogether/research.png"
import de2 from "../../../assets/images/vogether/storyboard.jpg"
import de3 from "../../../assets/images/vogether/blockfram.jpg"
import de4 from "../../../assets/images/vogether/prototype.png"
import de5 from "../../../assets/images/vogether/user.png"

import $ from 'jquery';

const container = {
    top: 60,
    position: 'fixed',
    width: '100%',
    overflow: 'scroll',
    height: "95vh"
}

class Vogether extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        const selectPosition = $(".p" + e.target.className).position().top;
        $('#vogether').animate({ scrollTop: selectPosition }, 700);

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
        for (var i = 0; i < Copyright.vogether.title.length - 1; i++) {
            if (thePosition > $(".pp" + i).position().top - 120 && thePosition < $(".pp" + (i + 1)).position().top) {
                this.neutral();
                this.turnPink('p' + i);
            }
        }

        // for the last item in the menu
        if (thePosition > $(".pp" + (Copyright.vogether.title.length - 1)).position().top) {
            this.neutral();
            this.turnPink('p' + (Copyright.vogether.title.length - 1));
        }
    }
    handleScroll = e => {
        e.preventDefault();
        this.scrollCheck($('#vogether').scrollTop())

    }

    render() {
        return (
            <div id="vogether" style={container} onScroll={this.handleScroll}>
                <NavigationBar />
                <Navi />

                {/* navigation bar ==============================================================================================  */}
                <div id="navi" className="animated slideInDown">
                    <div id="content">
                        <ul>Design Process
                            {Copyright.vogether.title.map((item, index) => {
                            return (
                                <li key={index} onClick={this.onClick} className={"p" + index}>{item}
                                </li>
                            )
                        })}
                        </ul>


                        <div id="recommend">
                            <br />
                            <ul>More projects like this<br />

                                {Copyright.vogether.otherProjects.map((item, index) => {
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
                        imgSrc={pro7}
                        descrip={Copyright.vogether.descrip}
                        name={Copyright.vogether.name}
                        challenge={Copyright.vogether.challenge}
                        myrole={Copyright.vogether.myrole}
                        for={Copyright.vogether.for} />

                    <Paragraph banner={de1} title={Copyright.vogether.title[0]} val="pp0" class="pp0">

                    </Paragraph>


                    <Paragraph banner={pro2} title={Copyright.vogether.title[1]} val="pp1" class="pp1">
                        <p>Do you have some moments that you feel so many emotions pile up in your chest, but none of your friends are available to talk? Vogether will give you the forthwith attention you want. We deliver the quantity of interactions which neither Twitter nor Instagram can garantee.
                        </p>
                    </Paragraph>



                    <Paragraph banner={de2} title={Copyright.vogether.title[2]} val="pp2" class="pp2">
                        <p>Brainstormed and made panels that include the summary from the user research. There were 16 ways approaching the problem at the beginning. Then, I picked out my top three best solutions with professor.
                            <br /> Within the 3 approaches, I elaborated on details and content requirements and picked out the best of each and combined them into one ultimate version.
                        </p>
                    </Paragraph>

                    <Paragraph banner={de3} title={Copyright.vogether.title[3]} val="pp3" class="pp3">
                        <p>Base on the ultimate version from the sketch, I made blockframe that contains all the functionality and content using Sketch for the first round of usability test. </p>
                    </Paragraph>

                    <Paragraph banner={de4} title={Copyright.vogether.title[4]} val="pp4" class="pp4">
                        <p>While doing the user test and making changes to design, I moved on to animated prototype by using Principle. With the help of Animation, users had better clue about the clickability of each element. The more elaborate the interactions are, the closer the prototype is to the ultimate product. </p>
                    </Paragraph>


                    <Paragraph banner={de5} title={Copyright.vogether.title[5]} val="pp5" class="pp5">
                        <p>There were lots of changes made during the process of blockframe and prototyping. I showed each action to five people and observed their reactions and behaviors.
                            <br />During the test, people are actually more collaborative than I expected, and they pointed out what they think can be improved or what they wish to add directly. However, taking in every single advice I heard can lead to screen creep. People involved in test may have a different scope or just reflecting what they like in the existing products. <span className="blue">I only redesigned the steps that multiple get stucks.</span>
                            <br />For example, I redesigned the scroll up menu in the recording page, because only people use iphone X are trained to adapt this particular pattern. Other mobile users had no clue how to deal with it, or even not realized that it was a menu at all. Thus, I changed the color and put in verbal indicator to teach my users this new user pattern.</p>
                    </Paragraph>

                    <br /><br /><br />  <br /><br /><br />




                    {/* all for demo=====================================++======+++++========================================================================================================== */}
                    <Paragraph banner={pro3} title={Copyright.vogether.title[6]} val="pp6" class="pp6">
                    </Paragraph>

                    <Paragraph banner={pro4} title={Copyright.vogether.title[7]} val="pp7" class="pp7">
                        <p>Below are the key features of the product</p>
                        <br />
                        <h1>Random exposure</h1>
                        <p>Each user will be able to record their own stories and listen to other people's stories according to emotions at the moment. Each color represents a mood.</p>
                    </Paragraph>

                    <Paragraph banner={pro5}>
                        <h1>Record your story</h1>
                        <p>You can record whatever you want to say. But be aware of what you say in each one, because the system only allows user to post a new one 2 hours after you send your recording.
                        </p>
                    </Paragraph>

                    <Paragraph banner={pro6}>
                        <h1>Getting attention</h1>
                        <p>Loneliness doesn't exist here. After you send your record, it will be posted for 2 hours. You will be able to see all the people listen to your story. THERE IS ALWAYS SOMEBODY LISTENING TO YOU! You can also chat with them if you want.
                        </p>
                    </Paragraph>

                    <Paragraph banner={pro7}>
                        <h1>Record your story</h1>
                        <p>Loneliness doesn't exist here. After you send your record, it will be posted for 2 hours. You will be able to see all the people listen to your story. THERE IS ALWAYS SOMEBODY LISTENING TO YOU! You can also chat with them if you want.
                        </p>
                    </Paragraph>

                    <Paragraph banner={pro8}>
                        <h1>Emotion Archive</h1>
                        <p>We will archive all your stories in your profile and corresponsive analysis of the audiences. Share the trophies with your friends on social media! Have fun!
                        </p>
                    </Paragraph>

                    <Paragraph banner={pro9} title={Copyright.vogether.title[8]} val="pp8" class="pp8">
                        <p>It is just a loneliness fulfilling app. We do not require you to provide any confidential information. The only thing you need to initiate it is an account, preferred name and preferred location. We don't even care about their authenticity. You do not have to put in anything you don't want to. We will just get to know the you that you want us to know.

</p>
                    </Paragraph>

                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />




                </div>
            </div>
        );
    }
}

export default Vogether;