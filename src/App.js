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
                This page was coded by{" "}
                <a href="https://szido-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                    Szidonia Bodo
                </a>
                , hosted on{" "}
                <a
                    href="https://app.netlify.com/teams/bodoszidi/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Netlify
                </a>
                , and the source can be found on{" "}
                <a href="https://github.com/bodoszidi" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                .
            </footer>
        </div>
    );
}

export default App;
