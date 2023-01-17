import { Link } from "react-router-dom";

type Props = {
    className: string;
    linkTo: string;
    openNewWindowOnClick: boolean;
    children: string;
}

function Bubble({className, linkTo, openNewWindowOnClick, children}: Props) {
    return (
    <div className={className}>
        <div className="bubble-inner">
                {!!openNewWindowOnClick  ? <a className="bubble-link" href={linkTo} target="_blank">{children}</a> 
                    : <Link className="bubble-link" to={"/about"}>{children}</Link>}
        </div>
    </div>);  
};


export default Bubble;