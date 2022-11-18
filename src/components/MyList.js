import { Grid } from "semantic-ui-react";
import MyListShow from "./MyListShow";

function MyList({myList, removeFromMyList}){

    const myListToDisplay = myList.map(show => <MyListShow key={show.id} show={show} removeFromMyList={removeFromMyList}/>)

    return (
        <div className="grid">
            <h1>Click on the pictures to delete them</h1>
            <Grid>{myListToDisplay}</Grid>
        </div>
    )
}

export default MyList