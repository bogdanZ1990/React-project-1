import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from './Home'
import TVShows from "./TVShows";
import MyList from './MyList';
import '../App.css';
import { Route, Routes } from "react-router-dom";


function App() {
  const [shows, setShows] = useState([])
  const [selectedShow, setSelectedShow] = useState()
  const [myList, setMyList] = useState([])
  const [myListNum, setMyListNum] = useState(0)

  // 'http://api.tvmaze.com/shows?page=100'
  useEffect(() => {
    fetch('http://api.tvmaze.com/shows')
    .then(resp => resp.json())
    .then(data => setShows(data))
    .catch(err => console.log(err))
  }, [])

  function addToMyList(obj){
    !myList.includes(obj) && setMyList([...myList, obj], setMyListNum(currentVal => currentVal + 1))
  }

  function removeFromMyList(show){
    const updatedMyList = myList.filter(elem => elem.id !== show.id)
    setMyList(updatedMyList)
    setMyListNum(currentVal => currentVal - 1)
  }


    return (
      <>
        <Navbar myList={myList} myListNum={myListNum} />
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tvshows' element={<TVShows shows={shows} setShows={setShows} selectedShow={selectedShow} setSelectedShow={setSelectedShow} addToMyList={addToMyList}  removeFromMyList={removeFromMyList} myList={myList} />} />
                <Route path='/mylist' element={<MyList myList={myList} removeFromMyList={removeFromMyList} />} />
            </Routes>

        </div>
      </>
    );
  }
  
  export default App; 