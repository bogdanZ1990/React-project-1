import {Link, useMatch, useResolvedPath} from 'react-router-dom'


function Navbar({myList, myListNum}){

    const num = myList && myListNum

    return (
        <nav className="nav">
            <Link to='/' className='title'>
                WhatToWatch.com
            </Link>
            <ul>
                <CustomLink to='/tvshows'>TV Shows</CustomLink>
                <CustomLink to='/mylist'> My List {`(${num})`}</CustomLink>
            </ul>
        </nav>
      

    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar