import { useState } from "react";
import "./App.scss";
import { useEffect } from "react";
import UniversityList from "./UniversityList";
import SearchBar from "./SearchBar";

function App() {
    const [universities, setUniversities] = useState([]);
    const [filterUnis, setFilterUnis] = useState([]); //using this so you will be able to make more research. because after one you make a filter and the other university arr gonr forever
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");
    const [numberOfResearch, setNumberOfResearch] = useState(0);
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
            setFilterUnis(newObj);
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    useEffect(() => {
        fetchUniversityData();
    }, []);

    /////////////////////////// searchbar /////////////////////////////////////////////////
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    const handleClick = async () => {
        const uniResearch = universities.filter((e) =>
            e.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilterUnis(uniResearch);
        setValue("");
        setNumberOfResearch(numberOfResearch + 1);
    };

    const handleSort = () => {
        const uniSort = [...universities].sort((a, b) =>
            a.name > b.name ? 1 : -1
        );
        setFilterUnis(uniSort);
    };
    //////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            {universities && (
                <>
                    <SearchBar
                        value={value}
                        handleChange={handleChange}
                        handleClick={handleClick}
                        numberOfResearch={numberOfResearch}
                        handleSort={handleSort}
                    />
                    <UniversityList list={filterUnis} />
                </>
            )}
        </>
    );
}

export default App;
