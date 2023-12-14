const SearchBar = ({ value, handleChange, handleClick }) => {
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
            <button>Sort</button>
            <div>
                <p>Contatore:</p>
            </div>
        </div>
    );
};

export default SearchBar;
