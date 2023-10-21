import '../styles/Header.css'

import { useState } from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    const [shown, setShown] = useState(false)
    return (
        <>
            <section className="header-container">
                <span>Agent Time Monitor</span>
                <span>example@gmail.com</span>
                <span onClick={() => setShown(!shown)}>
                    <img src="https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true" />
                </span>
            </section>
            {
                shown &&
                <section className="menu-container">
                    <span><Link className="links" to="/">Dashboard</Link></span>
                    <span><Link className="links" to="/breaks">Breaks</Link></span>
                    <span><Link className="links" to="/agentout">Agent Outs</Link></span>
                    <hr />
                    <span>Profile</span>
                    <span>Logout</span>
                </section>
            }
        </>

    )
}

export default Header;