const UniversityList = ({ list }) => {
    return (
        <>
            <div className="university-container">
                {list.map((university, i) => (
                    <div key={`university${i}`} className="university-list">
                        <div className="university-details">
                            <p className="university-name">{university.name}</p>

                            <p> University Website Link:</p>
                            <a
                                href={university.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {university.name}
                            </a>
                        </div>
                        <figure>
                            <img
                                src={`https://source.unsplash.com/random/?university-${i}`}
                                alt=""
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UniversityList;
