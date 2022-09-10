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
            <div className="top-header hidden sm:flex sm:gap-4 bg-black text-gray-200 sm:justify-between sm:items-center py-2 px-10 " >
                <div className="flex gap-4">
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
            <nav className="flex flex-col sm:flex-row justify-between items-center gap-2 py-2 px-10 border-t-8 border-[#ffd500] bg-gradient-to-r from-[#f7f8f9]/60 to-[#fff]/100 " >
                <div>
                    <Link to="/">
                        <div>
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
                                        <li>
                                            <Link to="" >Frezeleme (ultra-bite) </Link>
                                        </li>
                                        <li>
                                            <Link to="" >Frezeleme (mic-cut) </Link>
                                        </li>
                                        <li>
                                            <Link to="" >Frezeleme (eco-plus) </Link>
                                        </li>
                                        <li>
                                            <Link to="" >Frezeleme (alu-mac) </Link>
                                        </li>
                                        <li>
                                            <Link to="" >Frezeleme (hpc) </Link>
                                        </li>
                                        <li>
                                            <Link to="" >Frezeleme (thread-mill) </Link>
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