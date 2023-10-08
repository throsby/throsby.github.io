import { Link } from "react-router-dom"

function About(){

    return(<>
        <div>
            <p>I'm working to become a Junior Software Engineer working on problems that work toward a future that is more equal equitable and just.</p>
            <p>Here's my <Link className="link" to={"https://www.github.com/throsby"}>Github!</Link></p>
            <p>Here's my <Link to={"https://www.linkedin.com/in/throsbywells"}>LinkedIn!</Link></p>
        </div>

        <img alt='Traffic Cone to Remind you of those "Website Under Construction Images from the 90s and &apos;00s"' src="traffic-cone.png"/>
        </>
    )
}

export default About;