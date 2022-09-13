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
            <div className="top-header hidden sm:flex sm:gap-4 bg-[#313131] text-gray-200 sm:justify-between sm:items-center py-2 pl-52 pr-48 w-full border-b-8 border-[#ffd500]" >
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
            <nav className="navbaree bg-gradient-to-r from-transparent via-white to-white flex flex-col sm:flex-row justify-between items-center gap-2 py-3 pl-52 pr-48 "
            >
                {/* bg-gradient-to-r from-transparent via-white to-white */}
                <div>
                    <Link to="/">
                        <div >
                            <img src={starMakMetallLogo} alt="starmak-metall-logo" />
                        </div>
                    </Link>
                </div>
                <div className="flex gap-1 sm:gap-12" >
                    <Link to="/" >Anasayfa</Link>

                    <div className="dropdown " >
                        <label
                            tabIndex={0}
                            className="m-1 cursor-pointer">
                            Kurumsal
                        </label>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu shadow rounded-none w-[14.77rem] bg-[#EEEEEE]/90 text-[#000] font-medium">
                            <div className="w-[4px] h-full bg-[#ffd500]" >
                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                    <Link to="hakkimizda" className="pl-10" >Hakkımızda</Link>
                                </li>
                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">
                                    <Link to="ozeltakim" className="pl-10">Özel Takım</Link>
                                </li>
                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">
                                    <Link to="uretimkapasitemiz" className="pl-10">Üretim Kapasitemiz</Link>
                                </li>
                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">
                                    <Link to="kalitepolitikamiz" className="pl-10">Kalite Politikamız</Link>
                                </li>
                                <li className="w-[14.77rem]">
                                    <Link to="kvkkaydinlatma" className="pl-10 ">KVKK</Link>
                                </li>
                            </div>
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
                            className="dropdown-content menu shadow rounded-none w-[14.77rem] bg-[#EEEEEE]/90 text-[#000] font-medium">
                            <div className="w-[4px] h-full bg-[#ffd500]" >

                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">
                                    <div
                                        className="dropdown dropdown-right" >
                                        <label
                                            tabIndex={0}
                                            className="cursor-pointer pl-6">
                                            Solid Karbür
                                        </label>
                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu shadow rounded-none w-[14.77rem] bg-[#EEEEEE]/90"
                                        >
                                            <div className="w-[4px] h-full bg-[#ffd500]" >
                                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                                    <Link to="delikisleme" className="pl-10" >Delik İşleme</Link>
                                                </li>
                                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                                    <Link to="delikisleme" className="pl-10" >Frezeleme (ultra-bite)</Link>
                                                </li>
                                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                                    <Link to="delikisleme" className="pl-10" >Frezeleme (mic-cut)</Link>
                                                </li>
                                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                                    <Link to="delikisleme" className="pl-10" >Frezeleme (eco-plus)</Link>
                                                </li>
                                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                                    <Link to="delikisleme" className="pl-10" >Frezeleme (alu-mac)</Link>
                                                </li>
                                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                                    <Link to="delikisleme" className="pl-10" >Frezeleme (hpc)</Link>
                                                </li>
                                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]" >
                                                    <Link to="delikisleme" className="pl-10" >Frezeleme (thread-mill)</Link>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">
                                    <Link
                                        to="kataloglarimiz"
                                        className="pl-10"
                                    >
                                        Kataloglarımız
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className="dropdown" >
                        <label tabIndex={0} className="m-1 cursor-pointer">
                            Medya
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu shadow rounded-none w-[14.77rem] bg-[#EEEEEE]/90 text-[#000] font-medium"
                        >
                            <div className="w-[4px] h-full bg-[#ffd500]" >

                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">

                                    <Link to="testvideolari" className="pl-10">Test Videoları</Link>
                                </li>
                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">
                                    <Link to="galeri" className="pl-10 ">Galeri</Link>
                                </li>
                                <li className="border-b-[1px] border-[#9EA2A3] w-[14.77rem]">
                                    <Link to="haberler" className="pl-10 " >Haberler</Link>
                                </li>
                            </div>
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