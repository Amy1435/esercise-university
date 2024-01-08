const SearchBar = ({
    value,
    handleChange,
    handleClick,
    numberOfResearch,
    handleSort,
}) => {
    return (
        <div className="search-bar">
            <h1>University research</h1>
            <div>
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
                <button onClick={handleSort}>Sort</button>
            </div>
            <div>
                <p>Researches counter: {numberOfResearch}</p>
            </div>
        </div>
    );
};

export default SearchBar;
