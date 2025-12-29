import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Results(props) {
    return (
        <div className="Result">
            <h2 className="d-flex flex-column align-items-start text-start">
                {props.results.word}
            </h2>

            {props.results.phonetics.map((phonetic, index) => (
                <div key={index}>
                    <Phonetics phonetic={phonetic} />
                </div>
            ))}

            {props.results.meanings.map((meaning, index) => (
                <div key={index}>
                    <Meaning meaning={meaning} />
                </div>
            ))}
        </div>
    );
}
