import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Results(props) {
    return (
        <div className="Result">
            {props.results.meanings.map((meaning, index) => (
                <div key={index}>
                    <Meaning meaning={meaning} />
                </div>
            ))}

            {props.results.phonetics.map((phonetic, index) => (
                <div key={index}>
                    <Phonetics phonetic={phonetic} />
                </div>
            ))}
        </div>
    );
}
