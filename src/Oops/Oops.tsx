import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Oops() {
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => {
        if (location.pathname !== "/oops"){
                navigate('/oops')
        }
    }, )
    


    return (
        <>
            <h1>404!</h1>
            <p>Send me an email at inquiry[at]throsby[.]dev</p>
        </>
    )
}

export default Oops;