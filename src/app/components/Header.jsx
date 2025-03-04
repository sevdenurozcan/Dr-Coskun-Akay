'use client'
import "../css/Header.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";



function Header() {



    return (
        <div className="header-main">
            <nav className="nav">
                <div className="logolar">
                    <a href="https://www.facebook.com/drcoskunakay/">
                        <FaFacebook className="icon" />
                    </a>
                </div>
                <div className="logolar">
                    <a href="https://x.com/coskunakay/">
                        <FaTwitter className="icon" />
                    </a>
                </div>
                <div className="logolar">
                    <a href="https://www.instagram.com/drcoskunakay/">
                        <FaInstagram className="icon" />
                    </a>
                </div>

            </nav>

            <div className="doktor-main">
                <p className="doktor">
                    Dr. Coşkun Akay
                </p>
                <div className="iletisim">
                    <p>İletişim</p>
                    <div className="tel-no-container">
                        <p className="tel-no">0312 439 76 33 </p>
                        <p><IoCall className="tel-icon" /></p>
                    </div>
                </div>
            </div>

            <div>
                <nav className="navbar">
                    <p className="navbar-p" >ANASAYFA</p>
                    <p className="navbar-p">HAKKIMDA</p>
                    <p className="navbar-p">OZON</p>
                    <p className="navbar-p">MAKALELERİMİZ</p>
                    <p className="navbar-p">SIKÇA SORULAN SORULAR</p>
                    <p className="navbar-p">İLETİŞİM</p>
                </nav>
            </div>


        </div>
    )
}

export default Header