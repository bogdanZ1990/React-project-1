import { useState } from "react"

function MyListShow({show, removeFromMyList}){
    const [remove, setRemove] = useState(false)

    function handleRemove(){
        removeFromMyList(show)
    }

    return (
        <div className="mylist_img_cont">
            <button className={remove ? 'btn_remove' : 'btn_remove hidden'} onClick={handleRemove}>Delete</button>
            <img className={remove && "opacity_dark"} src={show.image && show.image.medium} alt={show.name} onClick={() => setRemove(!remove)}/>
        </div>
    )
}

export default MyListShow