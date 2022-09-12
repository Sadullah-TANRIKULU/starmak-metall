import tamnokta from "../assets/images/k3dfserisi/tamnokta.png";
import yarimnokta from "../assets/images/k3dfserisi/yarimnokta.png";
import bosnokta from "../assets/images/k3dfserisi/bosnokta.png";
import alfa from "../assets/images/k3dfserisi/alfa.png";
import formhadin from "../assets/images/k3dfserisi/formhadin.png";
import ruzgar from "../assets/images/k3dfserisi/ruzgar.png";
import nem from "../assets/images/k3dfserisi/nem.png";
import tiain from "../assets/images/k3dfserisi/tiain.png";
import matkapucucizim from "../assets/images/k3dfserisi/matkapucucizim.png";
import matkapucuorjinal from "../assets/images/k3dfserisi/matkapucuorjinal.png";
import matkapucununalti from "../assets/images/k3dfserisi/matkapucununalti.png";
import genelmuhendislik from "../assets/images/k3dfserisi/genelmuhendislik.png";
import otomotiv from "../assets/images/k3dfserisi/otomotiv.png";
import kalipcilik from "../assets/images/k3dfserisi/kalipcilik.png";
import raylisistem from "../assets/images/k3dfserisi/raylisistem.png";
import savunma from "../assets/images/k3dfserisi/savunma.png";
import delikkesit1 from "../assets/images/k3dfserisi/delikkesit1.png";
import delikkesit2 from "../assets/images/k3dfserisi/delikkesit2.png";
import delikkesit3 from "../assets/images/k3dfserisi/delikkesit3.png";
import delikkesit4 from "../assets/images/k3dfserisi/delikkesit4.png";
import delikkesit5 from "../assets/images/k3dfserisi/delikkesit5.png";
import sliderImage1 from "../assets/images/delikisleme/sliderimage1.png";
import K3DFTable from "../components/K3DFTable";


const K3DFSerisi = () => {


    return (
        <section className="text-center flex flex-col justify-center w-full py-2 " >
            {/* GENEL ÖZELLİKLER KISMI */}
            <div className="mb-28 relative" >
                <img src={sliderImage1} alt="home-slider-img" className="w-full" />
                <h1 className="font-semibold text-[#9ea2a3] w-[40rem] h-12 absolute bottom-32 left-52 text-left text-5xl" >Delik İşleme</h1>
                <h3 className="font-medium text-[#6b6e6f] w-[40rem] h-12 absolute bottom-20 left-52 text-left text-2xl" >Lörem ipsum prov benyk som kvasivis treligt. Lan kiska heterorat aplad judonde.</h3>
            </div>
            <div className="text-center mb-24 flex justify-center w-full px-4 sm:pl-52 sm:pr-48 py-2 border-[#9EA2A3]" >

                <div className="w-4/12 border">
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#4f80ff] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                Çelik
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={tamnokta} alt="tamnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#ffd500] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                Paslanmaz Çelik
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={yarimnokta} alt="yarimnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#6B6E6F] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                Sertleştirilmiş Çelik ≤ 54 HRc
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={yarimnokta} alt="yarimnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#6B6E6F] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16"
                            >
                                Sertleştirilmiş Çelik &gt; 54 HRc
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={yarimnokta} alt="yarimnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#E30613] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                Döküm
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={tamnokta} alt="tamnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#000] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                Grafit
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={tamnokta} alt="tamnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#39B11B] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                Demir Dışı Materyal
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={yarimnokta} alt="yarimnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#FE7A00] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                HRSA
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={yarimnokta} alt="yarimnokta" className=" w-5 " />
                        </div>
                    </div>
                    <div className="border-b-[1px] flex justify-between items-center w-full h-14 sm:h-[3.3rem]">
                        <div className="bg-[#B47439] w-3 h-full"></div>
                        <div className="flex justify-center items-center border-r-[1px] w-[26rem] h-full">
                            <h4 className="font-medium text-xl text-[#6b6e6f] w-full text-left pl-16">
                                Titanyum
                            </h4>
                        </div>
                        <div className="flex justify-start w-10">
                            <img src={yarimnokta} alt="yarimnokta" className=" w-5 " />
                        </div>
                    </div>

                    <div className="flex items-center justify-start w-full h-36 pl-24" >
                        <div className="flex flex-col gap-2" >
                            <div className="flex items-center gap-2">
                                <img src={tamnokta} alt="tamnokta" className="block w-5 " />
                                <h4 className="text-[#6B6E6F] text-xl" >Önerilir</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={yarimnokta} alt="yarimnokta" className="block w-5 " />
                                <h4 className="text-[#6B6E6F] text-xl" >Kabul Edilebilir</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={bosnokta} alt="bosnokta" className="block w-5 " />
                                <h4 className="text-[#6B6E6F] text-xl" >Önerilmez</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/12 border-y-[1px] flex flex-col justify-center items-center gap-6 py-3">
                    <img src={alfa} alt="alfa" className="p-1" />
                    <img src={formhadin} alt="formhadin" className="p-1" />
                    <img src={ruzgar} alt="ruzgar" className="p-1" />
                    <img src={nem} alt="nem" className="p-1" />
                    <img src={tiain} alt="tiain" className="p-1" />
                </div>

                <div className="w-6/12 border">
                    <div className="flex w-full h-3/5 pl-8 pt-5" >
                        <div className="relative" >
                            <img src={matkapucucizim} alt="matkapucucizim" className="block" />
                            <img src={matkapucuorjinal} alt="matkapucuorjinal" className="block absolute top-16" />
                        </div>
                        <div className="flex justify-center items-start pt-8">
                            <img src={matkapucununalti} alt="matkapucununalti" className="block " />
                        </div>
                    </div>
                    <div className="border-t-[1px] flex justify-center w-full h-2/5 items-center p-2" >
                        <div className="grid grid-cols-3 gap-4" >
                            <img src={genelmuhendislik} alt="genelmuhendislik" className="block h-16" />
                            <img src={otomotiv} alt="otomotiv" className="block h-16" />
                            <img src={kalipcilik} alt="kalipcilik" className="block h-16" />
                            <img src={raylisistem} alt="raylisistem" className="block h-16" />
                            <img src={savunma} alt="savunma" className="block h-16" />
                        </div>
                    </div>
                </div>

                <div className="w-1/12 border-y-[1px] border-r-[1px] flex flex-col items-center justify-center">
                    <div className="h-full flex flex-col justify-between py-4">
                        <img src={delikkesit1} alt="delikkesit1" className="block" />
                        <img src={delikkesit2} alt="delikkesit2" className="block" />
                        <img src={delikkesit3} alt="delikkesit3" className="block" />
                        <img src={delikkesit4} alt="delikkesit4" className="block" />
                        <img src={delikkesit5} alt="delikkesit5" className="block" />
                    </div>
                </div>
            </div>

            {/* STOK KOD TABLOSU LİNKLERİ */}

            <div className="flex justify-center w-full px-4 sm:pl-52 sm:pr-48 py-2">
                <div
                    className="border border-[#9EA2A3] w-1/3 h-[6.2rem] flex justify-center items-center text-[#6B6E6F] hover:bg-[#6B6E6F] hover:text-white cursor-pointer" 
                    
                    >
                    <h4 className="font-medium text-xl" >
                        K3DF Serisi
                    </h4>
                </div>
                <div
                    className="border border-[#9EA2A3] w-1/3 h-[6.2rem] flex justify-center items-center text-[#6B6E6F] hover:bg-[#6B6E6F] hover:text-white cursor-pointer" >
                    <h4 className="font-medium text-xl" >
                        Kesme Değerleri
                    </h4>
                </div>
                <div
                    className="border border-[#9EA2A3] w-1/3 h-[6.2rem] flex justify-center items-center text-[#6B6E6F] hover:bg-[#6B6E6F] hover:text-white cursor-pointer" >
                    <h4 className="font-medium text-xl" >
                        Diş Başı İlerleme (mm/dev)
                    </h4>
                </div>
            </div>

            {/* STOK KOD TABLOSU */}
            <K3DFTable/>


        </section>
    );
}

export default K3DFSerisi;