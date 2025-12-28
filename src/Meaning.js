export default function Meaning({ meaning }) {
    console.log("meaning:", meaning);

    function ExampleContent({ example }) {
        if (example && example.length > 0) {
            return (
                <div className="d-flex ">
                    <h2 className="me-2">
                        Example:{" "}
                    </h2>
                    <p className="m-2 p-1">
                        <em>{example}</em>
                    </p>
                </div>
            );
        }
    }

    return (
        <div className="Meaning">
            <div className="d-flex flex-wrap justify-content-start">
                <h3 className="me-2">Definition: </h3>
                <p className="m-2 p-1">{meaning.definition}</p>
            </div>

            <ExampleContent example={meaning.example} />
        </div>
    );
}
