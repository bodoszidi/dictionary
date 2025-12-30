import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
    console.log("meaning:", meaning);

    function ExampleContent({ example }) {
        if (example && example.length > 0) {
            return (
                <div className="d-flex flex-column align-items-start text-start">
                    <h5 className="p-1">Example: </h5>
                    <p className="m-1">
                        <em>{example}</em>
                    </p>
                </div>
            );
        }
    }

    return (
        <div className="Meaning container">
            <h3 className="me-2 d-flex flex-column align-items-start text-start">
                {meaning.partOfSpeech}{" "}
            </h3>
            <div className="d-flex flex-column align-items-start text-start">
                <h5 className="p-1">Definition: </h5>
                {meaning.definitions.map((defi, index) => {
                    return (
                        <div key={index}>
                            <p className="m-1">{defi.definition}</p>
                            <ExampleContent example={defi.example} />
                            {defi.synonyms && (
                                <Synonyms synonyms={defi.synonyms} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
