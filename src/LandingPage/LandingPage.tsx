import { Link } from "react-router-dom";
import Bubble from "../Bubble/Bubble";
import ResumeItem from "../ResumeItem/ResumeItem";

function LandingPage(){
    let lionsgateJobDesc = <><br />
        <em>Day-to-day Office Operations:</em>
        <br />- Provided customer service to various department heads to coordinate weekly and daily Covid testing requirements via email and phone
        <br />- Scheduled between 200 and 500 daily covid tests, totalling more than 10,000 antigen and PCR tests each season using Google Sheets
        <br />- Planned, communicated, and implemented an organized data hygiene process to improve transparency within our team across time zones and shifts
        <br />- Trained new team members on accessing data using 3rd party health data portals for nightly reconciliation<br/>
        <em>Self-Motivated Programmer:</em>
        <br />- Built custom Python data pipeline that accessed email, read pdf tables and digested tabular data to custom Google Sheets layouts
        <br />- Built custom functions using Google AppScript to automate sending emails and creating pdf attachments
        <br />- Built custom dashboarding and data visualizations for Google Sheets test schedules that organized tests by type and location
        <br />- Building Python scripting & GUI that automates weekly time card processes creates and merges unique pdfs<br />
        </> as JSX.Element

    let americorpsJobDesc = <><br/>
        <em>Project Assistant and Staffer</em>
        <br />- Secured $10,000 grant for beautification projects in the Olmstead park system
        <br />- Implemented and formally proposed mini-grant program city policy for beautification projects developed by community groups
        <br />- Developed and conducted focus group for Community Development Groups to improve city administrative support practices
        <br />- Supported in the implementation of city policy and projects
        <br />- Organized and managed Mayor's Day of Recognition and Awards for National and Community Service        
        </> as JSX.Element

    let peacecorpsJobDesc = <>
        <em>Ag Economics Extension Volunteer</em>
        <br />- Educated 200+ community members on public health initiatives via educational seminars and literature
        <br />- Established community loan and savings bank as a capital development project
        <br />- Facilitated community education, worked dynamically to solve problems working with stakeholders
        <br />- Worked with community members to build funding plan for irrigation system to benefit 75 families
        <br />- Liaised with outside facilitators to create cow and chicken trainings for more than 50 community members
        <br />- Introduced Orange Fleshed Sweet Potatoes at 2 primary schools to provide vitamin support for more than 200 community children
</> as JSX.Element

    return(
    <div className="landing-page">
        <div className="leftSide">
            <div className="short-form-resume">
                <div className="resume-heading">Short Form Resume</div>
                <ResumeItem times="October 2020 - March  2023" title="Health Safety Coordinator @ Lionsgate Entertainment" body={lionsgateJobDesc} />
                <ResumeItem times="February 2017 - March 2020" title="Agriculture Volunteer @ Peace Corps" body={peacecorpsJobDesc} />
                <ResumeItem times="November 2016 - November 2017" title="Americorps Volunteer & Project Assistant @ Department of Citizen Services Buffalo City Hall" body={americorpsJobDesc} />
            </div>
        </div>
        <div className="vl"/>
        <div className="rightSide"> 
            <div className="outer-circle">
                <div className="inner-circle"/>
                <div className="bubbles">
                    <div className="bubble-outer">
                        <Bubble className={"github-bubble"} linkTo={"https://www.github.com/throsby"} openNewWindowOnClick={true}>
                            Github Link
                        </Bubble>
                        <Bubble className={"project1-bubble"} linkTo={"https://ruby.throsby.dev"} openNewWindowOnClick={false}>
                            Orto Immaginario
                        </Bubble>
                        <Bubble className={"linkedin-bubble"} linkTo={"https://www.linkedin.com/in/throsbywells/"} openNewWindowOnClick={true}>
                            LinkedIn Link
                        </Bubble>
                        <Bubble className={"project2-bubble"} linkTo={"/about"} openNewWindowOnClick={false}>
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