import '../styles/Profile.css'
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'
import { useState, useEffect } from 'react';

const Profile = () => {
    const [shown, setShown] = useState(true);
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const [realName,setRealName]=useState(localStorage.getItem('realName'))
    const [americanName, setAmericanName] = useState(localStorage.getItem('americanName'))
    const [role, setRole] = useState(localStorage.getItem('role'))
    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [pictureLink, setPictureLink] = useState(localStorage.getItem('pictureLink'));
    const [team, setTeam] = useState(localStorage.getItem('team'))
    const [message,setMessage]=useState("");

    function updateUserInformation(e) {
        e.preventDefault();
        const configuration = {
            method: "put",
            url: `http://localhost:8080/api/v1/users/${userId}`,
            data: {
                realName,
                americanName,
                email,
                role,
                pictureLink,
                team
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setMessage(result.data.status)
                alert("Profile Update Successful")
                setShown(true)
            })
            .catch((error) => {
                setMessage(error.response.data.status);
            });
    }

    return (
        <>
            <Header />
            <section className="profile-container">
                {
                    shown &&
                    <>
                        <div>
                            <span>
                                <img src={pictureLink} />
                            </span>
                            <span>{realName}</span>
                        </div>
                        <div>
                            <span>American Name: {americanName}</span>
                            <span>Email: {email}</span>
                            <span>Role: {role}</span>
                            <span>Team: {team}</span>
                        </div>
                        <div>
                            <button onClick={() => setShown(false)}>Edit</button>
                        </div>
                    </>
                }
                {
                    !shown &&
                    <>
                        <div>
                            <span>
                                <textarea type="text"
                                    placeholder="Image URL Link here"
                                    row="5"
                                    value = {pictureLink}
                                    onChange={(e)=>setPictureLink(e.target.value)}
                                    >
                                </textarea>
                            </span>
                            <span><input type="text" placeholder="Real Name" value={realName} onChange={(e)=>setRealName(e.target.value)}/></span>
                        </div>
                        <div>
                            <span>
                                <input type="text" placeholder="American Name" value={americanName} onChange={(e)=>setAmericanName(e.target.value)}/>
                            </span>
                            <span>
                                <input type="email" placeholder="example@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </span>
                            <span>
                                <input type="text" placeholder="TL, Agent" value={role} onChange={(e)=>setRole(e.target.value)}/>
                            </span>
                            <span>
                                <input type="text" placeholder="Team" value={team} onChange={(e)=>setTeam(e.target.value)}/>
                            </span>
                        </div>
                        <div>
                            <button onClick={(e)=>updateUserInformation(e)}>Save</button>
                        </div>
                        {message}
                    </>
                }

            </section>
            <Footer />
        </>
    )
}
export default Profile;