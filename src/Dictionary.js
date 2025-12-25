export default function Dictionary() {
    return (
        <div className="Dictionary">
            <form action="/search" method="get">
                <label for="search">Search</label>
                <input
                    type="search"
                    id="search"
                    name="q"
                    placeholder="Search..."
                    required
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
