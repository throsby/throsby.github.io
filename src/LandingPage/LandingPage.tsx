import { Link } from "react-router-dom";

function LandingPage(){

    return(
    <div className="landing-page">
        <div className="leftSide">
            <div className="short-form-resume">
                <div className="item-1"></div>
                <div className="item-2"></div>
                <div className="item-3"></div>
            </div>
        </div>
        <div className="vl"/>
        <div className="rightSide"> 
            <div className="outer-circle">
                <div className="inner-circle"/>
                <div className="bubbles">
                    <div className="github-bubble">
                        <a className="bubble-link" href="https://www.github.com/throsby" target="_blank">Github Link</a>
                    </div>
                    <div className="project1-bubble">
                        <Link className="bubble-link" to={""}>Project 1 Link</Link>
                    </div>
                    <div className="project2-bubble">
                        <Link className="bubble-link" to={""}>Project 2 Link</Link>
                    </div>
                    <div className="linkedin-bubble">
                        <a className="bubble-link" href="https://www.linkedin.com/in/throsbywells/" target="_blank">LinkedIn Link</a>
                    </div>
                </div>
            </div>
        </div>        
    </div>
)
}

export default LandingPage;