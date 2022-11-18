import { Input } from "semantic-ui-react";


function Search({search, setSearch}){

    function handleSearch(e){
        setSearch(e.target.value)
    }

    return (
        <Input type='text' placeholder='Search by name' value={search} onChange={handleSearch}/>
    )
}

export default Search;