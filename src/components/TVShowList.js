import HorizontalScroll from 'react-horizontal-scrolling'

function TVShowList({shows, setSelectedShow}){

    const itemsToDisplay = shows.map(show => <img className="row_show_pic" key={show.id} src={show.image && show.image.medium} alt={show.name} onClick={() => setSelectedShow(show)}/>)

    return (
        <HorizontalScroll className="row">{itemsToDisplay}</HorizontalScroll>
    )
}

export default TVShowList;