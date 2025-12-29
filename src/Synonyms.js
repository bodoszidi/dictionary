export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms p-1 d-flex flex-column flex-md-row flex-wrap justify-content-start">
                <h5 className=" me-1">Synonyms: </h5>
                {props.synonyms.map((synonyms, index) => {
                    return <p className="" key={index}>{synonyms}</p>;
                })}
            </div>
        );
    } else {
        return null;
    }
}
