import { Link } from "react-router-dom";
import React from "react";
import $ from 'jquery';
import "../../css/index.css"

import TimeStamp from "../../components/timeStampInHP"
import TimeLine from "../../components/timeLine"
import NavigationBar from "../../components/navigation"
import LandingPageAnimation from "../../components/landingPageAnimation"

import CampyBG from "../../assets/images/home/CampyBG.svg"
import Campy from "../../assets/images/home/logoCampy.gif"
import Vogether from "../../assets/images/vogether/2-record.gif"
// import Thesis from "../../assets/images/home/Thesis.svg"
import Venture from "../../assets/images/home/venture.png"
import DODCornell from "../../assets/images/home/DODCornell.svg"
import Copyright from "../../assets/copyright/home_copyright.json"

import PinkButton from "../../components/pinkButton"
import ArrowDown from "../../components/arrow"

import Github from "../../assets/images/contact/github.png"
import Linkedin from "../../assets/images/contact/linkedin.png"

const windowHeight = {
    height: window.innerHeight,
    minHeight: 600,
    position: 'relative',
}
const row = {
    marginLeft: '10%',
    marginTop: 24
}


class Homepage extends React.Component {

    state = {
        password: '0',
        background: 0,
        timeLineHeight: $(document).height()
    }

    handleScroll = e => {
        e.preventDefault();
        $('#landingPart').css({
            'display': 'flex',
            'marginTop': (10 - (this.state.timeLineHeight - $('#Thesis').position().top) * 0.01) + "vh"
        })
        $("#contactPart").css('display', 'none');

        $('#backgrounds').css('opacity', 1)
        this.setState({ timeLineHeight: $(document).height() })

        // transit BG of landing page's out
        if (0 < $('#Thesis').position().top) {
            this.setState({ background: 0 });
        }
        // transit BG of venture in page's in
        if (0 > $('#Thesis').position().top) {
            this.setState({ background: 1 })
            $("#landingPart").css('display', 'none')
        }
        // transit BG of coder in page's in
        if (0 > $('#coder').position().top) {
            $("#contactPart").css('display', 'flex');
            this.setState({
                background: 2,
                timeLineHeight: 300
            })
        }
    }

    render() {
        return (

            <div id="parallaxScroll" onScroll={this.handleScroll}>
                <NavigationBar href="#contactPart" />
                <TimeLine height={this.state.timeLineHeight} />
                <div id="HP_container" className='HP_container' >

                    {/* landing page */}
                    <div style={windowHeight} className="sessionContainer landingPart">
                        <div id="landingPart">
                            <div className='HP_Intro'>
                                {Copyright.landingPage.title} </div>
                            <div className='HP_descrip'>
                                Recently, I worked as front-end engineer and lead designer at a startup
                            &nbsp;<a className="Alllinks" href="https://www.getawarehealth.com">AwareHealth</a>&nbsp;
                            while I went to school at Parsons finishing up my
                            &nbsp;<a className="Alllinks" href="https://thesiscampy.webflow.io">thesis</a> &nbsp;and Cornell Tech solving
                            &nbsp;<Link className="Alllinks" to="smoothHire">product challenge</Link> &nbsp;from Department of Defense.
                            </div>
                        </div>
                        <div className="HP_downArr">
                            <div> &nbsp;&nbsp; Career key projects </div>
                            <ArrowDown />
                        </div>
                    </div>

                    {/* Thesis Campy */}
                    <div id="Thesis" className="black sessionContainer" style={windowHeight}>

                        <div className="contentblock">
                            <TimeStamp
                                time={Copyright.thesis.time}
                                color='black'
                            />
                            <div className='HP_Intro' > {Copyright.thesis.title}</div>
                            <div className='HP_descrip'>{Copyright.thesis.content}
                                <br />
                                <PinkButton
                                    innerLink={false}
                                    label="See product"
                                    link={Copyright.thesis.link}
                                />
                            </div>
                        </div>
                        <div className="contentblock">
                            <img src={Campy} alt="campy" className="campy img" />
                        </div>
                        <img src={CampyBG} style={{ position: 'absolute', top: 0, left: -60 }} className={CampyBG} alt="campyBG"></img>
                    </div>

                    {/* product studio */}
                    <div id="DODCornell" className="black sessionContainer DODCornell" style={windowHeight}>
                        <div className="contentblock">
                            <img src={DODCornell} className="DODCornellImg" alt="DODCornell"></img>
                        </div>
                        <div className="contentblock">
                            <TimeStamp
                                time={Copyright.dodCornell.time}
                                color="black"
                            />
                            <div className='HP_Intro'>{Copyright.dodCornell.title}</div>
                            <div className='HP_descrip'>
                                {Copyright.dodCornell.content}
                                <br />
                                <PinkButton
                                    innerLink={true}
                                    label="See process"
                                    link={Copyright.dodCornell.link}
                                />
                            </div>
                        </div>

                    </div>


                    {/* Vogether */}
                    <div id="Vogether" className="white sessionContainer" style={windowHeight}>
                        <div className="contentblock">
                            <TimeStamp
                                time={Copyright.vogether.time}
                                color="white"
                            />
                            <div className='HP_Intro' >{Copyright.vogether.title}</div>
                            <div className='HP_descrip' >
                                {Copyright.vogether.content}
                            </div>
                            <PinkButton
                                innerLink={true}
                                label="View project"
                                link={Copyright.vogether.link}
                            />
                        </div>
                        <div className="contentblock" style={{ overflow: 'hidden' }}>
                            <img src={Vogether} alt="vogether" className="img ventureImg"></img>
                        </div>
                    </div>


                    {/* startup studio */}
                    <div id="Venture" className="black sessionContainer" style={windowHeight}>

                        <div className="contentblock">
                            <TimeStamp
                                time={Copyright.venture.time}
                                color="black"
                            />
                            <div className='HP_Intro' >{Copyright.venture.title}</div>
                            <div className='HP_descrip' >
                                {Copyright.venture.content}
                            </div>
                            <PinkButton
                                innerLink={false}
                                label="Read insights"
                                link={Copyright.venture.link}
                            />
                        </div>
                        <div className="contentblock">
                            <img src={Venture} alt="venture" className="img ventureImg"></img>
                        </div>
                    </div>



                    {/* Fullstack coding */}
                    <div id="coder" className="black " style={windowHeight}>
                        {/* <div className="sessionContainer"> */}

                        <TimeStamp
                            time={Copyright.coder.time}
                            color="white"
                        />
                        <div className='HP_Intro coder' >{Copyright.coder.title}</div>
                        <div className='HP_descrip coder'>
                            <div className="indentInCoder"><span className="greyCode codeDefineIndent">var NewTechnologies</span> = [Javascript, Node.js, React.js, Bootstrap,Firebase, MySQL, MongoDB, Express.js, Chai.js, Mocha.js]
                            </div>
                            <br />
                            <div>
                                <div className="indentInCoder yellowCode"> <span className="greyCode codeDefineIndent">var Projects</span> <span className="pinkCode">=</span>
                                        [<br />
                                    <br />
                                        &#123;name: "Flocker", type: ‘Matching app’, <a className="greenCode" rel="noopener noreferrer" target="_blank" href="https://github.com/wangx733/flocker">link</a>&#125;,</div>
                                <br />
                                <div className="indentInCoder yellowCode"> &#123;name: "DearTime", type: "UX engineering",<a className="greenCode" rel="noopener noreferrer" target="_blank" href="https://github.com/wangx733/dearTime">link</a>&#125;,</div>
                                <br />
                                <div className="indentInCoder yellowCode"> &#123;name: "Bamazon", type: "Cli app", <a className="greenCode" rel="noopener noreferrer" target="_blank" href="https://github.com/wangx733/Bamazon_Cli_App">link</a> &#125;</div>
                                <br />
                                <div className="indentInCoder yellowCode">]</div>
                                <br />
                            </div>
                            {

                                <div>
                                    {
                                        Copyright.coder.content.map((item, i) => {
                                            if (i % 2) {
                                                return <span className="greyCode" key={i}> {item} </span>

                                            }
                                            else {
                                                return item
                                            }
                                        })
                                    }

                                </div>
                            }

                        </div>
                        {/* </div> */}
                    </div>

                    {/* contact */}
                    <div style={windowHeight} className="sessionContainer white contactPart">
                        <div id="contactPart">

                            <div style={row}>
                                <h2 className="pink"> wangxbella0108@gmail.com</h2>
                                <h2 className="pink"> +1 (908) 391 – 6750</h2>
                            </div>

                            <div style={row}>
                                <a href="https://github.com/wangx733">
                                    <img src={Github} alt="icon"></img>
                                </a>
                            </div>

                            <div style={row}>
                                <a href="https://www.linkedin.com/in/isabella-w-310181149/">
                                    <img src={Linkedin} alt="icon"></img>
                                </a>
                            </div>


                        </div>
                    </div>



                </div>
                <div id="backgrounds">
                    <LandingPageAnimation backgroundNmb={this.state.background} />
                </div>

            </div >
        );

    }
}

export default Homepage;
