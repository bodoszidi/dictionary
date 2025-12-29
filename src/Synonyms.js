export default function Synonyms(props) {
    console.log("THIS IS IT", props.synonyms);
    if (props.synonyms) {
        return (
            <div className="Synonyms d-flex flex-column flex-md-row flex-wrap justify-content-start">
                <h2 className=" me-2">Synonyms: </h2>
                {props.synonyms.map((synonyms, index) => {
                    return <p className="m-2 p-1" key={index}>{synonyms}</p>;
                })}
            </div>
        );
    } else {
        return null;
    }
}
