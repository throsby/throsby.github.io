import { Link } from "react-router-dom";

type Props = {
    className: string;
    linkTo: string;
    newWindow: boolean;
    children: string;
}

function Bubble({className, linkTo, newWindow, children}: Props) {
    return (
    <div className={className}>
        <div className="bubble-inner">
                {!!newWindow  ? <a className="bubble-link" href={linkTo} target="_blank">{children}</a> 
                    : <Link className="bubble-link" to={"/about"}>{children}</Link>}
        </div>
    </div>);  
};


export default Bubble;