import React from 'react'
import './Sidebar.css'
import Home from '../../assets/home.png'
import Game from '../../assets/game.png'
import Sports from '../../assets/sports.png'
import Automobile from'../../assets/automobile.png'
import Technology from '../../assets/technology.png'
import Entertainmnet from '../../assets/entertaiment.png'
import News from '../../assets/news.png'
import Music from '../../assets/music.png'
import Profile from '../../assets/profile.jpg'
export default function ({sidebar, category, setCategory}) {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
                    <img src={Home} alt="Home" />
                    <p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={() => setCategory(20)}>
                    <img src={Game} alt="Game" />
                    <p>Gaming</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={() => setCategory(17)}>
                    <img src={Sports} alt="Home" />
                    <p>Sports</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={() => setCategory(2)}>
                    <img src={Automobile} alt="Home" />
                    <p>Autombile</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={() => setCategory(24)}>
                    <img src={Entertainmnet} alt="Home" />
                    <p>Entertainmnet</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={() => setCategory(28)}>
                    <img src={Technology} alt="Home" />
                    <p>Technology</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={() => setCategory(10)}>
                    <img src={Music} alt="Music" />
                    <p>Music</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={() => setCategory(25)}>
                    <img src={News} alt="News" />
                    <p>News</p>
                </div>
                <hr />
                
                
            </div>
            <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
                        <img src={Profile} alt="Jack" />
                        <p>Jack</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
                        <img src={Profile} alt="Jack" />
                        <p>Jack</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
                        <img src={Profile} alt="Jack" />
                        <p>Jack</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
                        <img src={Profile} alt="Jack" />
                        <p>Jack</p>
                    </div>
                    <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
                        <img src={Profile} alt="Jack" />
                        <p>Jack</p>
                    </div>
                </div>   
        </div>
    )
}
