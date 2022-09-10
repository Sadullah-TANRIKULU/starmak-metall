import { Link } from "react-router-dom";
import { 
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin 
} from "react-icons/fa";
import starMakMetallLogo from "../assets/images/lOGO.png";
import sliderImage from "../assets/images/sliderimage.png";

const Header = () => {
    return (
        <section className="flex flex-col" >
            <div className="bg-black text-gray-200 flex justify-around items-center" >

            {/* TOP HEADER */}
                <div className="top-header flex gap-4 ">
                    <p>faruk@starkmetall.com.tr</p>
                    <p>+90 534 500 35 95</p>
                </div>
                <div className="social-icons flex gap-1">
                <FaFacebookSquare/>
                <FaTwitterSquare/>
                <FaLinkedin/>
                </div>
            </div>

            {/* NAVBAR */}
            <nav className="flex justify-around" >
                <Link to="anasayfa">
                    <div>
                        <img src={starMakMetallLogo} alt="starmak-metall-logo" />
                    </div>
                </Link>
                <div className="flex gap-4" >
                    <Link to="anasayfa" >Anasayfa</Link>

                    <Link to="kurumsal" >Kurumsal</Link>

                    <Link to="urunler" >Ürünler</Link>

                    <Link to="medya" >Medya</Link>
                    <Link to="ik" >İK</Link>
                    <Link to="iletisim" >İletişim</Link>
                </div>
                <div>
                    <div className="searchbar bg-gray-400">
                        <input type="search" />
                    </div>
                </div>
            </nav>

            {/* SOCIAL-ICONS */}
            <div>
                <img src={sliderImage} alt="home-slider-img" />
            </div>
        </section>
    );
}

export default Header;