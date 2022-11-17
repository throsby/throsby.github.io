import { Link } from "react-router-dom";
import Bubble from "../Bubble/Bubble";
import ResumeItem from "../ResumeItem/ResumeItem";

function LandingPage(){

    return(
    <div className="landing-page">
        <div className="leftSide">
            <div className="short-form-resume">
                <div className="resume-heading">Short Form Resume</div>
                <div className="item-1">
                    <p>Peace Corps - 2018 to 2020</p>
                    <p>Blah blah agriculture chicken training blah blah</p>
                </div>
                <div className="item-2">
                    <p>Americorps - 2016 to 2017</p>
                    <p>Wichita, Kansas is named for a sneeze Throsby once sneezed. It was that loud.</p>
                </div>
                <div className="item-3">
                    <p>Please Hire me - Sooner to Later</p>
                    <p>I'll do anything, I'll become a champion flamenco dancer for it</p>
                </div>
                <div className="item-4">
                    <p>Phenom at the Banjo</p>
                    <p>Throsby will win the Steve Martin prize for Banjo excellence only by working hard at it. Also by buying and playing the banjo. Actually mostly that.</p>
                </div>
                <ResumeItem times="timey times" title="Title" body="body"/>
            </div>
        </div>
        <div className="vl"/>
        <div className="rightSide"> 
            <div className="outer-circle">
                <div className="inner-circle"/>
                <div className="bubbles">
                    <div className="bubble-outer">                        
                        <Bubble className={"github-bubble"} linkTo={"https://www.github.com/throsby"} newWindow={true}>
                            Github Link
                        </Bubble>
                        <Bubble className={"project1-bubble"} linkTo={"/about"} newWindow={false}>
                            Project 1 Link
                        </Bubble>
                        <Bubble className={"linkedin-bubble"} linkTo={"https://www.linkedin.com/in/throsbywells/"} newWindow={true}>
                            LinkedIn Link
                        </Bubble>
                        <Bubble className={"project2-bubble"} linkTo={"/about"} newWindow={false}>
                            Project 2 Link
                        </Bubble>
                    </div>
                
                </div>
            </div>
        </div>        
    </div>
)
}

export default LandingPage;