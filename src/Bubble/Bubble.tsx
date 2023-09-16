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
                {!!openNewWindowOnClick ? <a className="bubble-link" href={linkTo} target="_blank">{children}</a> 
                    : <a className="bubble-link" href={destination}>{children}</a>}
    </div>);  
};


export default Bubble;