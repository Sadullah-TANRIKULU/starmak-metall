import { Link } from "react-router-dom";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin
} from "react-icons/fa";
import starMakMetallLogo from "../assets/images/lOGO.png";
import sliderImage from "../assets/images/sliderimage.png";
import searchVector from "../assets/images/Vector.png";

const Header = () => {
    return (
        <header className="flex flex-col" >
            {/* TOP HEADER */}
            <div className="bg-black text-gray-200 flex justify-between items-center py-2 px-10 " >
                <div className="top-header flex gap-4 ">
                    <p>faruk@starkmetall.com.tr</p>
                    <p>+90 534 500 35 95</p>
                </div>
                <div className="social-icons flex gap-1">
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                    <FaLinkedin />
                </div>
            </div>

            {/* NAVBAR */}
            <nav className="flex justify-between items-center gap-2 py-2 px-10 border-t-8 border-[#ffd500] bg-gradient-to-r from-[#fff]/60 to-[#fff]/100" >
                <div>
                    <Link to="anasayfa">
                        <div>
                            <img src={starMakMetallLogo} alt="starmak-metall-logo" />
                        </div>
                    </Link>
                </div>
                <div className="hidden sm:flex gap-4" >
                    <Link to="/" >Anasayfa</Link>

                    <Link to="kurumsal" >Kurumsal</Link>

                    <Link to="urunler" >Ürünler</Link>

                    <Link to="medya" >Medya</Link>
                    <Link to="insankaynaklari" >İK</Link>
                    <Link to="iletisim" >İletişim</Link>
                </div>
                <div className="hidden sm:flex sm:justify-center sm:items-center" >
                    <div className="searchbar bg-gray-200 flex justify-center p-1 rounded-l-lg w-40">
                        <input type="search" className="rounded-lg w-28" />
                        <img src={searchVector} alt="search-vector" className="block w-5 h-5 m-1" />
                    </div>
                </div>
            </nav>
            <div>
                <img src={sliderImage} alt="home-slider-img" />
            </div>
        </header>
    );
}

export default Header;