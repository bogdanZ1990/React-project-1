
function FilterByRating({setRating}){

    function handleChange(e){
        setRating(Number(e.target.value))
    }

    return (
        <div>
            <label htmlFor="rating">Filter by rating: </label>
            <select id="rating" onChange={handleChange}>
                <option value='0'>All</option>
                <option value='2'>2+</option>
                <option value='3'>3+</option>
                <option value='4'>4+</option>
                <option value='5'>5+</option>
                <option value='6'>6+</option>
                <option value='7'>7+</option>
                <option value='8'>8+</option>
                <option value='9'>9+</option>
            </select>
        </div>
    )
}

export default FilterByRating;