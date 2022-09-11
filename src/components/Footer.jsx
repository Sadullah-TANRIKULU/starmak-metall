import { Link } from "react-router-dom";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full text-[8px] md:text-[10px] lg:text-base mt-10" >
            <section className="w-full border-t-8 border-gray-400 bg-[#ffd500] flex justify-between items-center py-2 px-4 sm:px-10 min-h-[240px]" >
                <div className="w-1/5 h-32 pr-4 flex justify-start" >
                    <div className="text-left flex flex-col justify-center h-32">
                        <h5 className="font-bold" >KURUMSAL</h5>
                        <br />
                        <Link to="">Başkanın Mesajı</Link>
                        <Link to="">Neden Biz</Link>
                        <Link to="">Özel Takım</Link>
                        <Link to="">Kalite Politikamız</Link>
                        <Link to="">KVKK Politikamız</Link>
                        <Link to="">Kalite Yön.Sis.</Link>
                        <Link to="">Sertifikamız</Link>
                    </div>
                </div>
                <div className="border-[#6b6e6f]/75 border-r-2 border-l-2 w-1/5 h-32 px-4 flex justify-center" >
                    <div className="text-left flex flex-col justify-center h-32">

                        <h5 className="font-bold">ÜRÜNLER</h5>
                        <br />
                        <Link to="">Delik İşleme</Link>
                        <Link to="">Frezeleme (ulrta-bite)</Link>
                        <Link to="">Frezeleme (mic-cut)</Link>
                        <Link to="">Frezeleme (eco-plus)</Link>
                        <Link to="">Frezeleme (alu-mac)</Link>
                        <Link to="">Frezeleme (hpc)</Link>
                        <Link to="">Frezeleme (thread-mill)</Link>
                    </div>
                </div>
                <div className="w-1/5 h-32 px-1 sm:px-4 flex justify-end" >
                    <div className="text-left flex flex-col justify-center h-32">

                        <h5 className="font-bold">İLETİŞİM</h5>
                        <br />
                        <p>
                            Üçevler Mah. 26/220 Sok.
                            Küçük Sanayi Blok No:12/1
                            Nilüfer / Bursa / Türkiye
                        </p>
                        <br />
                        <p>
                            +90 224 441 05 01
                        </p>
                        <p>
                            +90 534 500 35 95
                        </p>
                        <p>
                            +90 507 077 64 46
                        </p>
                    </div>
                </div>
                <div className="social-icons flex items-center justify-end gap-1 w-1/5 sm:w-2/5 h-20">
                    <FaFacebookSquare className="w-10 h-10 grayscale" />
                    <FaTwitterSquare className="w-10 h-10 grayscale" />
                    <FaLinkedin className="w-10 h-10 grayscale" />
                </div>
            </section>
            <section className="bg-black text-gray-200" >
                <p className="text-center w-full py-2" >
                    ageren tevis, deligt
                </p>
            </section>
        </footer>
    );
}

export default Footer;