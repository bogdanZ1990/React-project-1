import { useState } from 'react';
import Filter from './Filter';
import TVShowList from './TVShowList';
import SelectedShow from './SelectedShow';
import 'semantic-ui-css/semantic.min.css'


function TVShows({shows, selectedShow, setSelectedShow, addToMyList, removeFromMyList, myList}) {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState(0)

  const filteredByGenre = genre ? shows.filter(show => show.genres.includes(genre)) : shows

  const filteredByRating = rating ? filteredByGenre.filter(show => show.rating.average >= rating) : filteredByGenre;

  const itemsToRender = search ? filteredByRating.filter(show => show.name.toLowerCase().includes(search.toLowerCase())) : filteredByRating;


  return (
    <div className="tv_shows">
      <Filter search={search} setSearch={setSearch} setGenre={setGenre} setRating={setRating}/>
      <TVShowList shows={itemsToRender} setSelectedShow={setSelectedShow}/>
      {selectedShow ? <SelectedShow selectedShow={selectedShow} addToMyList={addToMyList} removeFromMyList={removeFromMyList} myList={myList}/> : <h1>Choose a show</h1>}
    </div>
  );
}

export default TVShows;
