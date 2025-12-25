import "./App.css";
import Dictionary from "./Dictionary";

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">Find your words</header>
            </div>
            <main>
                <Dictionary />
            </main>
            <footer className="App-footer">
                This page was coded by <a href="#">Szidonia Bodo</a>, hosted on{" "}
                <a href="#">Netlify</a>, and the source can be found on{" "}
                <a href="#">GitHub</a>.
            </footer>
        </div>
    );
}

export default App;
