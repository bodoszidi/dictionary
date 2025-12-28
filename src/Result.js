import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
    console.log('result:', props.results)
    return (
        <div className="Result ">
            <h2 className="d-flex flex-wrap justify-content-start">{props.results.word}</h2>

            {props.results.meanings.map((meaning, index) => {
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                );
            })}
        </div>
    );
}
