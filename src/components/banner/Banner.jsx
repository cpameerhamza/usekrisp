import "./banner.css";

const Banner = ({title, small}) => {
    return(
        <>
            <div className={`banner ${small && "small"}`}>
                <div className="text">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}

export default Banner