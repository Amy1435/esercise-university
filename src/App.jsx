import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import UniversityList from "./UniversityList";
import SearchBar from "./SearchBar";

function App() {
    const [universities, setUniversities] = useState();
    const [value, setValue] = useState("");
    /////////////////////////// university list /////////////////////////////////////////////////
    const fetchUniversityData = async () => {
        try {
            const response = await fetch(
                "http://universities.hipolabs.com/search?country=Italy"
            );
            const obj = await response.json();

            const newObj = obj.map((university) => {
                return {
                    name: university.name,
                    url: university.web_pages[0],
                };
            });

            setUniversities(newObj);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUniversityData();
    }, []);

    /////////////////////////// searchBar /////////////////////////////////////////////////
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    const handleClick = async () => {
        const uni = universities.filter((e) =>
            e.name.toLowerCase().includes(value.toLowerCase())
        );
        setUniversities(uni);
    };

    return (
        <>
            {universities && (
                <>
                    <SearchBar
                        value={value}
                        handleChange={handleChange}
                        handleClick={handleClick}
                    />
                    <UniversityList list={universities} />
                </>
            )}
        </>
    );
}

export default App;
