import './Hero.css'
import logo from './assets/logo.jpg'
import leave from './assets/leave.jpg'
import options from './assets/options.jpg'
import translate from './assets/translate.jpg'
import sidebar from './assets/sidebar.jpg'

export default function Hero() {
    return (
        <div className="container">
            <div className="sidebar">
                <img src={sidebar} alt="sidebar" className='sidebar-btn' />
            </div>
            <div className="navbar">
                <img src={options} alt="options" className="options-btn" />
                <img src={logo} alt="logo" className="logo-btn" />
                <div className="navbar-right">
                    <img src={translate} alt="translate" className="translate-btn" />
                    <img src={leave} alt="leave" className="leave-btn" />
                </div>
            </div>
        </div>
    )
}