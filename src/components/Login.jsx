import Footer from './Footer'
import '../styles/Login.css'
const Login = () => {
    const ntuLogo = "https://i.ibb.co/bg5bgf9/ntulogo-2.png"
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
                    <input type="text" placeholder="email@example.com" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
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