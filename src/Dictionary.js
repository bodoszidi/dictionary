import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";

export default function Dictionary() {
    const [keyWord, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyWord} definition`);
    }

    function handelKeywordChange(event) {
        console.log(event.target.value)
        setKeyword(event.target.value)
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input
                    type="search"
                    className=""
                    autoFocus={true}
                    placeholder="Search..."
                    required
                    onChange={handelKeywordChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
