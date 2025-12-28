import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
    const [keyWord, setKeyword] = useState("");
    const [result, setResult] = useState(null);
    const apiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";

    function handelResponse(response) {
        console.log("res:", response);
        if (response.data.status) {
            alert(response.data.message);
        } else {
            setResult(response.data);
        }
    }

    function search(event) {
        event.preventDefault();
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
        axios.get(apiUrl)
            .then(handelResponse)
            .catch(error => {
                alert(error)
            });
    }

    function handelKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form
                onSubmit={search}
                className="d-flex justify-content-center gap-2"
            >
                <input
                    type="search"
                    className=""
                    autoFocus={true}
                    placeholder="Search..."
                    required
                    onChange={handelKeywordChange}
                />
                <button className="btn btn-primary" type="submit">
                    Search
                </button>
            </form>

            {result && <Result results={result} />}
        </div>
    );
}
