import './Hero.css'
import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext.jsx'
import logo from './assets/logo.jpg'
import leave from './assets/leave.jpg'
import options from './assets/options.jpg'
import translate from './assets/translate.jpg'
// import sidebar from './assets/sidebar.jpg'
import payment from './assets/payment.jpg'
import schedule from './assets/schedule.jpg'
import schedule2 from './assets/schedule2.jpg'
import shop from './assets/shop.jpg'
import profile from './assets/profile.jpg'
import people from './assets/people.jpg'
import home from './assets/home.jpg'

export default function Hero() {
    const { toggleLocale, t } = useContext(LanguageContext)

    return (
        <div className="container">
            <div className="sidebar">
                <Link to="/profile">
                    <img src={profile} alt="profile" className='sidebar-btn' />
                </Link>
                <Link to="/registration">
                    <img src={home} alt="registration" className='sidebar-btn' />
                </Link>
                <Link to="/schedule">
                    <img src={schedule} alt="schedule" className='sidebar-btn' />
                </Link>
                <Link to="/deadline">
                    <img src={schedule2} alt="deadline" className='sidebar-btn' />
                </Link>
                <Link to="/reviews">
                    <img src={people} alt="reviews" className='sidebar-btn' />
                </Link>
                <Link to="/dashboard">
                    <img src={shop} alt="dashboard" className='sidebar-btn' />
                </Link>
                <Link to="/payment">
                    <img src={payment} alt="payment" className='sidebar-btn' />
                </Link>
            </div>
            <div className="navbar">
                <div className="navbar-left">
                    <Link to="/dashboard">
                        <img src={options} alt="options" className="options-btn" />
                    </Link>
                    <Link to="/rating">
                        <img src={logo} alt="logo" className="logo-btn" />
                    </Link>
                </div>
                <div className="navbar-right">
                    <button type="button" className="translate-button" onClick={toggleLocale} title={t.translateTitle}>
                        <img src={translate} alt="translate" className="translate-btn" />
                    </button>
                    <img src={leave} alt="leave" className="leave-btn" />
                </div>
            </div>
            <main className="page-content">
                <Outlet />
            </main>
        </div>
    )
}