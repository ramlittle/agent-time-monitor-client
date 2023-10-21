import '../styles/Dashboard.css'

import Header from './Header';
import Footer from './Footer';
const Dashboard=()=>{
    return(
        <>
            <Header/>
            <section className="dashboard-container"> 
                <div>
                    Welcome, User .
                </div>
                <div>
                    <span>Announcements</span>
                    <hr/>                    
                </div>
                <div>
                    <div>
                        <span>5</span>
                        <span>Users</span>
                    </div>
                    <div>
                        <span>4</span>
                        <span>Teams</span>
                    </div>
                    <div>
                        <span>15</span>
                        <span>On Break</span>
                    </div>
                    <div>
                        <span>15</span>
                        <span>Agents Out</span>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Dashboard;