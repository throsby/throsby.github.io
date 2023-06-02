import { Link } from "react-router-dom";

type Props = {
    className: string;
    linkTo: string;
    openNewWindowOnClick: boolean;
    children: string;
}

function Bubble({className, linkTo, openNewWindowOnClick, children}: Props) {

    let destination = linkTo.startsWith("https") ? linkTo : "/about";

    return (
    <div className={className}>
        <div className="bubble-inner">
                {!!openNewWindowOnClick ? <Link className="bubble-link" to={linkTo} target="_blank">{children}</Link> 
                    : <Link className="bubble-link" to={destination}>{children}</Link>}
        </div>
    </div>);  
};


export default Bubble;