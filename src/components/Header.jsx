import '../styles/Header.css'

import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'

const Header = () => {
    const [shown, setShown] = useState(false)
    const [email,setEmail] = useState(localStorage.getItem('email'))
    const [pictureLink,setPictureLink]=useState(localStorage.getItem('pictureLink'))
    const navigate=useNavigate();
    function handleLogout(){
        const confirm=window.confirm('This will Log you out of ATM')
        if(confirm){
            localStorage.clear();
            navigate('/login')
        }
    }
    return (
        <>
            <section className="header-container">
                <span>Agent Time Monitor</span>
                <span>{email}</span>
                <span onClick={() => setShown(!shown)}>
                    <img src={pictureLink} />
                </span>
            </section>
            {
                shown &&
                <section className="menu-container">
                    <span><Link className="links" to="/">Dashboard</Link></span>
                    <span><Link className="links" to="/breaks">Breaks</Link></span>
                    <span><Link className="links" to="/agentout">Agent Outs</Link></span>
                    <hr />
                    <span><Link className="links" to="/profile">Profile</Link></span>
                    <span onClick={handleLogout}>Logout</span>
                </section>
            }
        </>

    )
}

export default Header;