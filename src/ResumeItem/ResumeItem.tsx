type Props = {
    times: string;
    title: string;
    body: string | JSX.Element;
}

function ResumeItem({times, title, body}: Props) {


    console.log(times, title, body)

    return(
        <>
            <div className="item-">
                <p>{times}</p>
                <p>{title}</p>
                <p>{body}</p>
            </div>
        </>
    );
}

export default ResumeItem;