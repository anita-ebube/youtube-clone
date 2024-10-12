import React from 'react'
import '../Navbar/Navbar.css'
import Menu from "../../assets/menu.png"
import Search from "../../assets/search.png"
export default function Navbar({ setSidebar }) {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <a href="/"><img className='menu-icon' onClick={() => setSidebar(prev => prev===false ? true : false)} src={Menu} alt="" /></a>
                <p className='logo'>My studio</p>
            </div>

            <div className='nav-middle flex-div'>
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img src={Search} alt="Search Icon" />
                </div>

            </div>

            <div className="nav-right flex-div">
                <img src="" alt="Upload" />
                <img src="" alt="more" />
                <img src="" alt="notification" />
                <img className='user-icon' src="" alt="profile" />
            </div>
        </nav>
    )
}
