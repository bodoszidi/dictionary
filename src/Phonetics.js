export default function Phonetics(props) {
    return (
        <div className="Phonetics d-flex flex-column align-items-start text-start">
            <a href={props.phonetic.audio} target="_blank"  rel="noopener noreferrer">
                Listen
            </a>
            <br />
            {props.phonetic.text}
        </div>
    );
}
