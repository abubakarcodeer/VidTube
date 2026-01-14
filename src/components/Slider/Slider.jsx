import React from 'react'
import './Slider.css'
import home from '../../assets/home.png'
import gameIcon from '../../assets/game_icon.png'
import automobileIcon from '../../assets/automobiles.png'
import sport from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import techIcon from '../../assets/tech.png'
import musicIcon from '../../assets/music.png'
import blogIcon from '../../assets/blogs.png'
import newsIcon from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

function Slider({ sidebar, category, setCategory }) {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-link" >
                <div className={`side-link ${category === 0 ? 'active' : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? 'active' : ""}`} onClick={() => setCategory(20)}>
                    <img src={gameIcon} alt="" /><p>Gaming</p>
                </div>
                <div className={`side-link ${category === 2 ? 'active' : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobileIcon} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 17 ? 'active' : ""}`} onClick={() => setCategory(17)}>
                    <img src={sport} alt="" /><p>Sports</p>
                </div>
                <div className={`side-link ${category === 24 ? 'active' : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className={`side-link ${category === 28 ? 'active' : ""}`} onClick={() => setCategory(28)}>
                    <img src={techIcon} alt="" /><p>Technology</p>
                </div>
                <div className={`side-link ${category === 10 ? 'active' : ""}`} onClick={() => setCategory(10)}>
                    <img src={musicIcon} alt="" /><p>Musics</p>
                </div>
                <div className={`side-link ${category === 22 ? 'active' : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogIcon} alt="" /><p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? 'active' : ""}`} onClick={() => setCategory(25)}>
                    <img src={newsIcon} alt="" /><p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribe-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack} alt="" /> <p>PewDiePie</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="" /> <p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /> <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /> <p>5-Minute Crafts</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" /> <p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Slider