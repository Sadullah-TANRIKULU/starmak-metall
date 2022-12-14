import freze1 from "../assets/images/anasayfa/20682e048abcb08185fa13a8b3e03bdc_1.png";
import freze2 from "../assets/images/anasayfa/20682e048abcb08185fa13a8b3e03bdc_2.png";
import freze3 from "../assets/images/anasayfa/20682e048abcb08185fa13a8b3e03bdc_3.png";
import freze4 from "../assets/images/anasayfa/20682e048abcb08185fa13a8b3e03bdc_4.png";
import freze5 from "../assets/images/anasayfa/20682e048abcb08185fa13a8b3e03bdc_5.png";
import freze6 from "../assets/images/anasayfa/20682e048abcb08185fa13a8b3e03bdc_6.png";
import freze7 from "../assets/images/anasayfa/20682e048abcb08185fa13a8b3e03bdc_7.png";
import img1Anasayfa from "../assets/images/anasayfa/img1anasayfa.png";
import sliderImage from "../assets/images/header/sliderimage1.png";



const Anasayfa = () => {
    return (
        <section className="text-center m-2 flex flex-col justify-center w-full py-2" >
            <div className="mb-28" >
                <img src={sliderImage} alt="home-slider-img" className="w-full" />
            </div>

            {/* FREZE UÇLARI */}
            <div className="flex flex-col gap-40 items-center w-full h-[31rem] px-4 sm:pl-52 sm:pr-48">
                <div className="grid grid-cols-7 text-[10px] w-full" >
                    <div className="flex flex-col items-center gap-4 border-r-2 h-24 sm:h-40 justify-center">
                        <img src={freze1} alt="freze1" className="block h-60" />
                        <span className="block" >Delik <br /> İşleme</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 border-r-2 h-24 sm:h-40 justify-center" >
                        <img src={freze2} alt="freze1" className="block h-60" />
                        <span className="block" >Frezeleme <br /> (ulrta-bite)</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 border-r-2 h-24 sm:h-40 justify-center">
                        <img src={freze3} alt="freze1" className="block h-60" />
                        <span className="block" >Frezeleme <br /> (mic-cut)</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 border-r-2 h-24 sm:h-40 justify-center">
                        <img src={freze4} alt="freze1" className="block h-60" />
                        <span className="block" >Frezeleme <br /> (eco-plus)</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 border-r-2 h-24 sm:h-40 justify-center">
                        <img src={freze5} alt="freze1" className="block h-60" />
                        <span className="block" >Frezeleme <br /> (alu-mac)</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 border-r-2 h-24 sm:h-40 justify-center">
                        <img src={freze6} alt="freze1" className="block h-60" />
                        <span className="block" >Frezeleme <br /> (hpc)</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 h-24 sm:h-40 justify-center">
                        <img src={freze7} alt="freze1" className="block h-60" />
                        <span className="block" >Frezeleme <br /> (thread-mill)</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4" >
                    <h3 className="w-[40rem] font-medium text-[#6B6E6F]" 
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat quia sint accusantium sequi illo eius doloremque quod.
                    </h3>
                    <h5 className="text-2xs w-80 font-medium text-[#6B6E6F]" 
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat quia sint accusantium sequi illo eius doloremque quod.
                    </h5>
                </div>
            </div>
            <hr className="w-[120rem] h-0.5 bg-[#d9d9d9]" />


            {/* IMG VE VIDEO WITH DESCRIPTION KISMI*/}
            <div className="grid sm:grid-cols-2 gap-4 w-full pt-10 pb-16 px-4 sm:pl-52 sm:pr-48" >
                <div className="flex flex-col justify-center py-2 gap-3" >
                    <h2 className="w-[30rem] text-left font-medium text-[#6B6E6F]" 
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum suscipit quos nihil officia nesciunt accusantium illum, impedit consequatur repellat.
                    </h2>
                    <hr className="w-44 h-0.5 bg-[#6B6E6F]" />
                    <h4 className="text-2xs w-[38.8rem] text-left font-medium text-[#6B6E6F]" 
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laborum suscipit quos nihil officia nesciunt accusantium illum, impedit consequatur repellat.
                    </h4>
                </div>
                <div className="flex items-center py-2" >
                    <img src={img1Anasayfa} alt="img1Anasayfa" className="w-full" />
                </div>
                <div className="h-[26rem] py-2" >
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VdaJKSjHy8U" title="Yüksek Kalite Hassas Ölçüm Sistemleri" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center items-center w-full py-2" >
                    <p className="w-[34rem] text-left" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti consequuntur cumque nulla et quibusdam dicta nihil itaque minus iusto. Porro corrupti accusantium tempore recusandae officiis molestias, libero nesciunt ipsa.
                    </p>
                </div>
            </div>
            <hr className="w-[120rem] h-0.5 bg-[#d9d9d9]" />

            {/* TEKLİF AL KISMI */}
            <div className="flex justify-between pt-12 h-[20rem] px-4 sm:pl-52 sm:pr-48">
                <h2 className="font-medium w-[54rem] text-left text-[#6B6E6F] h-40" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque vel saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, maxime?
                </h2>
                <div type="button" className="bg-[#ffd500] h-14 w-60 flex justify-center items-center" > <h4 className="w-20 h-6 text-[#6B6E6F]">Teklif Al</h4> </div>
            </div>
        </section>
    );
}

export default Anasayfa;