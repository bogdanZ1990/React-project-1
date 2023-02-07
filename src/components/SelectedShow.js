import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";


function SelectedShow({selectedShow, addToMyList, removeFromMyList, myList}){
    const [isSelected, setIsSelected] = useState(false);

    const {genres, image, name, rating, summary, officialSite} = selectedShow;

    const genresToRender = genres.map(genre => <li key={genre}>{genre}</li>);


    useEffect(() => {
        setIsSelected(myList.some(e => e.id === selectedShow.id))
    }, [myList, selectedShow])

    function handleClick(){
        isSelected ? removeFromMyList(selectedShow) : addToMyList(selectedShow)
    }


    return (
        <div className="selected_show_container">
            <div className="selected_show_info">
                <div className="selected_show_title">
                    <h1>{name}</h1>
                </div>
                <div className="selected_show_rating">
                    <h3>Rating:</h3>
                    <span>{rating.average}</span>
                </div>
                
                <div className="selected_show_genre">
                    <h3>Genres:</h3>
                    <ul>{genresToRender}</ul>
                </div>
                <div className="selected_show_site">
                    <h3>Official site:</h3>
                    <a href={officialSite}>{officialSite}</a>
                </div>
                <div className="selected_show_summary">
                    <h3>Summary:</h3>
                    <div dangerouslySetInnerHTML={{__html:summary}}></div>
                </div>
            </div>
            <div className="selected_show_pic">
                <img className="main_pic" src={image.medium} alt={name}/>
                <Button className="btn_add" onClick={handleClick}>{isSelected ? 'Remove from My List' : 'Add to My List'}</Button>
            </div>
            
        </div>
    )
}


export default SelectedShow
