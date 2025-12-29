import Meaning from "./Meaning";
import "./Result.css";

export default function Results(props) {

    return (
        <div className="Result">
            <h2 className="d-flex flex-column align-items-start text-start">
                {props.results[0].word} - {props.results[0].phonetic}
            </h2>

            {props.results.map((result) => {
                return (
                    result.meanings.map((meaning, index) => {
                        return (
                            <div key={index}>
                                <Meaning meaning={meaning} />
                            </div>
                        );
                    })
                )
            })}
        </div>
    );
}
