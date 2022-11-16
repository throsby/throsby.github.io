type Props = {
    times: string;
    title: string;
    body: string;
}

function ResumeItem({times, title, body}: Props) {


    console.log(times, title, body)

    return(
        <>
            <div className="item-4">
                <p>Phenom at the Banjo</p>
                <p>Throsby will win the Steve Martin prize for Banjo excellence only by working hard at it. Also by buying and playing the banjo. Actually mostly that.</p>
            </div>
        </>
    );
}

export default ResumeItem;