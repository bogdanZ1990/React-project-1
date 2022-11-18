import Search from './Search'
import FilterByRating from './FilterByRating'
import FilterByGenre from './FilterByGenre'


function Filter({search, setSearch, setGenre, setRating}){
    return (
        <div className='filterBar'>
            <Search search={search} setSearch={setSearch}/>
            <FilterByRating  setRating={setRating}/>
            <FilterByGenre setGenre={setGenre}/>
        </div>
    )
}

export default Filter