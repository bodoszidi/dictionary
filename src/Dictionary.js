import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
    const [keyWord, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handelResponse(response) {
        if (response.data.status) {
            alert(response.data.statusText);
        } else {
            setResults(response.data);
        }
    }

    function handelPhotoResponse(response) {
            setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
        axios
            .get(apiUrl)
            .then(handelResponse)
            .catch((error) => {
                alert(error);
            });
        const photoApiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
        const photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${photoApiKey}`;
        axios.get(photoApiUrl).then(handelPhotoResponse);
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
            {results &&
                results.map((result, index) => (
                    <div key={index}>
                        <Results results={result} />
                    </div>
                ))}
            {photos && <Photos photos={photos} />}
        </div>
    );
}
