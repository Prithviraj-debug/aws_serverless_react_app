import React, { useState, useEffect } from 'react';

const Header = () => {
    const [menuLinksData, setMenuLinksData] = useState([]);

    const loadMenuListData = async () => {
        // Qyery the api gw
        const resp = await fetch('https://hoot42w0t1.execute-api.us-east-1.amazonaws.com/Production/menu-links');
        let jsonData = await resp.json();

        //Assign res data to our state var.
        setMenuLinksData(jsonData)
        console.log(jsonData)
    }

    useEffect(() => {
        // Load the menu links data from the api gateway
        loadMenuListData();
    }, [])

    return (
        <header id="intro">
            <article className="fullheight">
                <div className="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                </div>
            </article>

            <nav id="nav">
                <div className="navbar">
                    <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                    <ul>
                        {
                            menuLinksData.map((link) =>
                                <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;