import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyWord, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  function handleDictionaryResponse(response) {
    if (response.data.status) {
      setResults(null);
      setErrorMessage("No dictionary information found!");
    } else {
      setResults(response.data);
      setErrorMessage("");
    }
  }

  function handlePhotoResponse(response) {
    if (response?.data?.photos && Array.isArray(response.data.photos)) {
      setPhotos(response.data.photos);
    } else {
      setPhotos([]);
    }
  }

  function search(mode) {
    // Clear previous results
    setResults(null);
    setPhotos([]);
    setErrorMessage("");

    const dictionaryApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    const photoApiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
    const photoApi = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${photoApiKey}`;

    if (mode === "dictionary" || mode === "all") {
      axios
        .get(dictionaryApi)
        .then(handleDictionaryResponse)
        .catch(() => setErrorMessage("No dictionary information found!"));
    }

    if (mode === "photos" || mode === "all") {
      axios
        .get(photoApi)
        .then(handlePhotoResponse)
        .catch(() => setPhotos([]));
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="d-flex justify-content-center gap-2 mb-3">
        <input
          type="search"
          className="form-control w-50"
          autoFocus
          placeholder="Search..."
          required
          onChange={handleKeywordChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => search("dictionary")}
        >
          Search Dictionary
        </button>
        <button
          className="btn btn-primary"
          onClick={() => search("photos")}
        >
          Search Pictures
        </button>
        <button className="btn btn-primary" onClick={() => search("all")}>
          Search All
        </button>
      </div>

      {errorMessage && <h2 className="text-center text-danger">{errorMessage}</h2>}

      {results &&
        results.map((result, index) => <Results key={index} results={result} />)}

      {photos.length > 0 && <Photos photos={photos} />}
    </div>
  );
}
