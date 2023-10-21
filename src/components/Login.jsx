import '../styles/Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Footer from './Footer'
const Login = ({examineCredentials}) => {
    const ntuLogo = "https://i.ibb.co/bg5bgf9/ntulogo-2.png"
    const navigate=useNavigate();
    const [userId, setUserId] = useState(localStorage.getItem('userId'))
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword,setShowPassword]=useState('password')
    const [errorMessage,setErrorMessage]=useState();

    function onShowPassword(e){
        if(e.target.checked){
            setShowPassword('text')
        }else{
            setShowPassword('password')
        }
    }

   function login(e){
        e.preventDefault();

        if(!!!email || !!!password){
            setErrorMessage('Fields must be complete!')
        }else{
        const configuration={
            method: 'post',
            url: 'http://localhost:8080/api/v1/auth/login',
            data:{
                email,
                password
            }
        }
        axios(configuration)
        .then((result)=>{
                //check if the login is valid
                if(result.data.status=='Email not yet registered'){
                    setErrorMessage('Email not yet registered')
                }else if(result.data.status=='Invalid password'){
                    setErrorMessage('Invalid password')
                }else{
                    setErrorMessage('Access Granted')
                    console.log('result dat',result.data)
                    localStorage.setItem('userId',result.data.id);
                    localStorage.setItem('userEmail',result.data.email)
                    // localStorage.setItem('userIsAdmin',result.data.isAdmin)
                    // localStorage.setItem('userFirstName',result.data.firstName)
                    // localStorage.setItem('userLastName',result.data.lastName)
                    // localStorage.setItem('userBirthDate',result.data.birthDate)
                    navigate('/')
                }
            })
        }
    }

    if(userId!==null){
        useEffect(() => {
            navigate("/dashboard")
        })
    }

    return (
        <>
            <section className="login-container">
                {/* 1 */}
                <div>
                    <span>
                        <img src={ntuLogo} />
                    </span>
                    <span>Noble Trends Unbound, Inc.</span>
                </div>
                {/* 2 */}
                <div>
                    <span>Agent Time Monitor</span>
                </div>
                {/* 3 */}
                <div>
                    <input type="text" placeholder="email@example.com" value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                    <input type={showPassword} placeholder="password"  value={password}
                                onChange={(e)=>setPassword(e.target.value)}/>
                    <input type='checkbox' onChange={onShowPassword}/>
                    <button onClick={(e)=>login(e)}>Login</button>
                    <span>{errorMessage}</span>
                </div>
                {/* 4 */}
                <div>
                    <span>Don't have an account?</span>
                    <span>Sign Up</span>
                </div>
                {/* 5 */}
                <div>
                    <span>Forgot Password</span>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login;