import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../css/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="site haritasi">
                <h4 className="sh-h4">SİTE HARİTASI</h4>
                <ul className="sayfa-liste">
                    <li>Anasayfa</li>
                    <li>Hakkımda</li>
                    <li>Makaleler</li>
                    <li>İletişim</li>
                </ul>
            </div>
            <div className="e-bulten">
                <h4 className="sh-h4">E-BÜLTEN KAYIT</h4>
                <p className="e-b-p">E-Bülten’ e kayıt olarak en yeni haberler, duyurular ve güncellemelerden ilk siz haberdar olabilirsiniz...
                </p>
                <input type="text" className="input-bulten" placeholder="Adınızı ve soyadınızı yazınız" />
                <input type="email" className="input-bulten" placeholder="E-mailinizi giriniz" />
                <button className="btn-kyt">Kayıt Ol</button>
            </div>
            <div className="footer-iletisim">
                <div>
                    <h4 className="sh-h4">İLETİŞİM</h4>
                    <ul className="iletisim-liste">
                        <li><FaLocationDot /> Tunus Caddesi 87/4 Kavaklıdere/Ankara</li>
                        <li><IoCall /> 0312 439 76 33</li>
                        <li><IoMail /> coskunakay@gmail.com</li>
                    </ul>
                </div>
                <div className="logolar-footer-main">
                    <div className="logolar-footer">
                        <a href="https://www.facebook.com/drcoskunakay/">
                            <FaFacebook className="icon-f" />
                        </a>
                    </div>
                    <div className="logolar-footer">
                        <a href="https://x.com/coskunakay/">
                            <FaTwitter className="icon-f" />
                        </a>
                    </div>
                    <div className="logolar-footer">
                        <a href="https://www.instagram.com/drcoskunakay/">
                            <FaInstagram className="icon-f" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer