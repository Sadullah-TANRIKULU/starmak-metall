import facebook from "../assets/images/header/facebook.png";
import twitter from "../assets/images/header/twitter.png";
import linkedin from "../assets/images/header/linkedin.png";


const Footer = () => {
    return (
        <footer className="w-full text-[8px] md:text-[10px] lg:text-base mt-10" >
            <section className="w-full border-t-[1rem] border-[#d9d9d9] bg-[#ffd500] flex justify-between items-center py-2 px-4 sm:pl-48 sm:pr-48 h-60" >
                <div className="w-1/5 h-32 flex justify-start" >
                    <div className="text-left flex flex-col justify-center h-32 w-60">
                        <h5 className="font-semibold text-[#6B6E6F]" >KURUMSAL</h5>
                        <br />
                        <div className="flex flex-col text-[#6B6E6F]/75" >
                            <h5 to="">Başkanın Mesajı</h5>
                            <h5 to="">Neden Biz</h5>
                            <h5 to="">Özel Takım</h5>
                            <h5 to="">Kalite Politikamız</h5>
                            <h5 to="">KVKK Politikamız</h5>
                            <h5 to="">Kalite Yön.Sis.</h5>
                            <h5 to="">Sertifikamız</h5>
                        </div>
                    </div>
                </div>
                <hr className="h-36 rotate-180 w-0.5 bg-[#6B6E6F]/50" />
                <div className="w-1/5 h-32 px-4 flex justify-center" >
                    <div className="text-left flex flex-col justify-center h-32 w-60">

                        <h5 className="font-semibold text-[#6B6E6F]">ÜRÜNLER</h5>
                        <br />
                        <div className="flex flex-col text-[#6B6E6F]/75" >

                            <h5 to="">Delik İşleme</h5>
                            <h5 to="">Frezeleme (ulrta-bite)</h5>
                            <h5 to="">Frezeleme (mic-cut)</h5>
                            <h5 to="">Frezeleme (eco-plus)</h5>
                            <h5 to="">Frezeleme (alu-mac)</h5>
                            <h5 to="">Frezeleme (hpc)</h5>
                            <h5 to="">Frezeleme (thread-mill)</h5>
                        </div>
                    </div>
                </div>
                <hr className="h-36 rotate-180 w-0.5 bg-[#6B6E6F]/50" />
                <div className="w-1/5 h-32 flex justify-end" >
                    <div className="text-left flex flex-col justify-center h-32 w-60">

                        <h5 className="font-semibold text-[#6B6E6F]" >İLETİŞİM</h5>
                        <br />
                        <div className="flex flex-col text-[#6B6E6F]/75" >
                            <h5>
                                Üçevler Mah. 26/220 Sok.
                                Küçük Sanayi Blok No:12/1
                                Nilüfer / Bursa / Türkiye
                            </h5>
                            <br />
                            <h5>
                                +90 224 441 05 01
                            </h5>
                            <h5>
                                +90 534 500 35 95
                            </h5>
                            <h5>
                                +90 507 077 64 46
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="social-icons w-2/5 flex gap-1 justify-end">
                    <img src={facebook} alt="facebook" className="w-8 h-8" />
                    <img src={twitter} alt="twitter" className="w-8 h-8" />
                    <img src={linkedin} alt="linkedin" className="w-8 h-8" />
                </div>
            </section>
            <section className="bg-black h-14" >
                <h6 className="text-center text-white w-full py-2" >
                    Ageren tevis, deligt
                </h6>
            </section>
        </footer>
    );
}

export default Footer;