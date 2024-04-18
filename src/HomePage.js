import React from 'react';
import './HomeStyles.css'; 
import ui from './Icons/ui.png';
import logo from './Icons/logo.png';
import PrivateRoom from './Icons/PrivateRoom.png';
import GameVarieties from './Icons/GameVarieties.png';
import LuckySpin from './Icons/LuckySpin.png';

const HomePage = () => {
    return (
        <div>
            <header>
                <div className="header">
                    <img src={logo} alt="Logo" className="logo" />
                    <p className="come-and-play">Come and Play</p>
                    <div className="header-right">
                        <a className="active" href="#home">HOME</a>
                        <a className="glossary-link" href="https://www.shafayouxi.org/glossary">GLOSSARY</a>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="leftsection">
                    <div className="ui-image">
                        <img src={ui} alt="Image Feature" />
                    </div>
                </div>

                <div className="rightsection">
                    <div className="TexasFeature">
                        <p>Texas Hold'em Features</p>
                    </div>

                    <div className="flex-item">
                        <div className="icon1 highlight-box"><img src={PrivateRoom} alt="Icon" /></div>
                        <div className="icon-name">PRIVATE ROOM</div>
                        <div className="description">Take your poker nights to the next level by creating or joining private rooms where you can play with friends in a more intimate setting. Customize your game, set the stakes, and invite specific players for a personalized and enjoyable gaming session.</div>
                    </div>

                    <div className="flex-item">
                        <div className="icon2 highlight-box"><img src={GameVarieties} alt="Icon" /></div>
                        <div className="icon-name">GAME VARIETIES</div>
                        <div className="description">Explore a range of poker games tailored to suit different preferences and skill levels. From the classic Texas Hold'em to the fast-paced Pinyin Sanzhang and the adrenaline-filled 6+ Hold'em, there's always a new challenge waiting for you.</div>
                    </div>

                    <div className="flex-item">
                        <div className="icon3 highlight-box"><img src={LuckySpin} alt="Icon" /></div>
                        <div className="icon-name">LUCKY SPIN</div>
                        <div className="description">Test your luck with every spin to win coins and diamonds. Each spin offers an opportunity to earn valuable in-game currency and exclusive items, enhancing your gameplay experience with every turn of the wheel.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;