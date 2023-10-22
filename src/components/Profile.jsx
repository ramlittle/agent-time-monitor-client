import '../styles/Profile.css'
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const Profile = () => {
    const [shown, setShown] = useState(true);
    return (
        <>
            <Header />
            <section className="profile-container">
                {
                    shown &&
                    <>
                        <div>
                            <span>
                                <img src="https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true" />
                            </span>
                            <span>Real Name Here</span>
                        </div>
                        <div>
                            <span>American Name: Sponge Guy</span>
                            <span>Email: spong@gmail.com</span>
                            <span>Role: Agent</span>
                            <span>Team: Joseph Becker</span>
                        </div>
                        <div>
                            <button onClick={() =>setShown(false)}>Edit</button>
                        </div>
                    </>
                }
                {
                    !shown &&
                    <div>
                        <button onClick={()=>setShown(true)}>Save</button>
                    </div>
                }

            </section>
            <Footer />
        </>
    )
}
export default Profile;