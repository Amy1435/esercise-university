const UniversityList = ({ list }) => {
    return (
        <>
            {list.map((university, i) => (
                <div key={`university${i}`}>
                    <h1>{university.name}</h1>
                    <a href={university.url} target="_blank" rel="noreferrer">
                        {university.name} Website Link
                    </a>
                </div>
            ))}
        </>
    );
};

export default UniversityList;
