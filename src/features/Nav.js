import React, { useEffect, useState } from 'react'
import "./Nav.css";
function Nav() {

    const [showNav, setShowNav] = useState(false);

    const transitionNavBar = () => {
        // console.log("transFun")
        if (window.scrollY > 150) {
            setShowNav(true);
        } else {
            setShowNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)

        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`nav ${showNav && 'nav__black'}`} >

            <div className='nav__contents'>

                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="logo"
                    className='nav__logo'
                />

                <img src="https://assets.videomaker.com/drpl/blogposts/2017/08/sss.jpg"
                    alt="logo"
                    className='nav__avatar'
                />

            </div>

        </div>
    )
}

export default Nav;