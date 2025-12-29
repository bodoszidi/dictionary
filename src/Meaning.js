import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {

    function ExampleContent({ example }) {
        if (example && example.length > 0) {
            return (
                <div className="d-flex flex-column flex-md-row">
                    <h5 className="p-1">
                        Example:{" "}
                    </h5>
                    <p className="m-1">
                        <em>{example}</em>
                    </p>
                </div>
            );
        }
    }

    return (
        <div className="Meaning">
            <h3 className="me-2 d-flex flex-column flex-md-row flex-wrap justify-content-start">{meaning.partOfSpeech} </h3>
            <div className="d-flex flex-column flex-md-row flex-wrap justify-content-start">
                
                <h5 className="p-1">Definition: </h5>
                <p className="m-1">{meaning.definition}</p>
            </div>

            <ExampleContent example={meaning.example} />
            < Synonyms synonyms={meaning.synonyms}/>
        </div>
    );
}
