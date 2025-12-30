export default function Synonyms({ synonyms }) {
    if (!synonyms || synonyms.length === 0) {
        return null;
    }

    return (
        <div className="Synonyms p-1 d-flex flex-column align-items-start text-start">
            <h5 className="me-1">Synonyms:</h5>
            {synonyms.map((word, index) => (
                <p key={index}>{word}</p>
            ))}
        </div>
    );
}
