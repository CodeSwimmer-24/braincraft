import React from 'react'
import DashboardCard from './DashboardCard'
import { FaUsers } from 'react-icons/fa'
import NavbarDash from './NavbarDash'

const Dashboard = () => {
    return (
        <>
            <div style={{
                height: "100vh", width: "100%", backgroundImage: "url('/static/media/about-bg.206efd7955c61824451d.png')", backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
                <NavbarDash />
                <div style={{ gap: "20px", display:"flex", justifyContent:'center'}}>
                    <DashboardCard />
                </div>
            </div>
        </>

    )
}

export default Dashboard
