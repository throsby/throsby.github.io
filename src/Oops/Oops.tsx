import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Oops() {
    const navigate = useNavigate()
    const location = useLocation()
    
    // useEffect(() => {
    //     if (location.pathname !== "/oops"){
    //             navigate('/oops')
    //     }
    // }, )

    return (
        <>
            <h1>This page doesn't exist!</h1>
            <p>
                <br />
                If you think I need help, you're probably right!
                <br/>
                Let me know if it's worth me knowing about! bugreport[@]throsby[.]dev
            </p>
        </>
    )
}

export default Oops;