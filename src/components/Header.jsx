import '../styles/Header.css'

import { useState } from 'react';

const Header = () => {
    const [shown, setShown] = useState(false)
    return (
        <>
            <section className="header-container">
                <span>Welcome, </span>
                <span>User Value here</span>
                <span onClick={()=>setShown(!shown)}>
                    <img src="https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true" />
                </span>
            </section>
            {
                shown &&
                <section className="menu-container">
                    <span>Dashboard</span>
                    <span>Breaks</span>
                    <span>Agent Outs</span>
                    <hr />
                    <span>Profile</span>
                    <span>Logout</span>
                </section>
            }
        </>

    )
}

export default Header;