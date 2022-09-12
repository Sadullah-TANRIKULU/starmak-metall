import { Link } from "react-router-dom";
import facebook from "../assets/images/header/facebook.png";
import twitter from "../assets/images/header/twitter.png";
import linkedin from "../assets/images/header/linkedin.png";
import starMakMetallLogo from "../assets/images/anasayfa/lOGO.png";
import sliderImage from "../assets/images/header/sliderimage1.png";
import searchVector from "../assets/images/header/Vector.png";

const Header = () => {
    return (
        <header className="flex flex-col" >
            {/* TOP HEADER */}
            <div className="top-header hidden sm:flex sm:gap-4 bg-[#313131] text-gray-200 sm:justify-between sm:items-center py-4 pl-52 pr-48 w-full border-b-8 border-[#ffd500]" >
                <div className="flex gap-8">
                    <h6 className="w-48 h-4">faruk@starkmetall.com.tr</h6>
                    <h6 className="w-48 h-4">+90 534 500 35 95</h6>
                </div>
                <div className="social-icons flex gap-1">
                    <img src={facebook} alt="facebook" className="w-8 h-8" />
                    <img src={twitter} alt="twitter" className="w-8 h-8" />
                    <img src={linkedin} alt="linkedin" className="w-8 h-8" />
                </div>
            </div>

            {/* NAVBAR */}
            <nav className="navbaree bg-gradient-to-r from-transparent to-white flex flex-col sm:flex-row justify-between items-center gap-2 py-4 pl-52 pr-48 " 
            >
            {/* bg-gradient-to-r from-transparent to-white */}
                <div>
                    <Link to="/">
                        <div >
                            <img src={starMakMetallLogo} alt="starmak-metall-logo" />
                        </div>
                    </Link>
                </div>
                <div className="flex gap-1 sm:gap-12" >
                    <Link to="/" >Anasayfa</Link>

                    <div className="dropdown" >
                        <label
                            tabIndex={0}
                            className="m-1 cursor-pointer">
                            Kurumsal
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="hakkimizda" >Hakkımızda</Link>
                            </li>
                            <li>
                                <Link to="ozeltakim" >Özel Takım</Link>
                            </li>
                            <li>
                                <Link to="uretimkapasitemiz" >Üretim Kapasitemiz</Link>
                            </li>
                            <li>
                                <Link to="kalitepolitikamiz" >Kalite Politikamız</Link>
                            </li>
                            <li>
                                <Link to="kvkkaydinlatma" >KVKK</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="dropdown" >
                        <label
                            tabIndex={0}
                            className="m-1 cursor-pointer">
                            Ürünler
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <div
                                    className="dropdown dropdown-right" >
                                    <label
                                        tabIndex={0}
                                        className="m-1 cursor-pointer">
                                        Solid Karbür
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <Link to="delikisleme" >Delik İşleme</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="kataloglarimiz"
                                >
                                    Kataloglarımız
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="dropdown" >
                        <label tabIndex={0} className="m-1 cursor-pointer">
                            Medya
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="testvideolari" >Test Videoları</Link>
                            </li>
                            <li>
                                <Link to="galeri" >Galeri</Link>
                            </li>
                            <li>
                                <Link to="haberler" >Haberler</Link>
                            </li>
                        </ul>
                    </div>

                    <Link to="insankaynaklari" >İK</Link>
                    <Link to="iletisim" >İletişim</Link>
                </div>
                <div className="flex justify-center items-center" >
                    <div className="searchbar bg-[#eee] flex justify-center items-center gap-2 rounded-l-3xl w-48 h-8">
                        <input type="search" className="rounded-3xl w-36 h-6" />
                        <img src={searchVector} alt="search-vector" className="block w-5 h-5" />
                    </div>
                </div>
            </nav>
            {/* <div>
                <img src={sliderImage} alt="home-slider-img" className="w-full" />
            </div> */}
        </header>
    );
}

export default Header;