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

const K3DFSerisi = () => {
    return (
        <section className="text-center m-2 flex justify-center w-full px-4 sm:px-10 py-2" >
            <div className="w-4/12 border text-2xs">
                <div className="border border-black flex justify-between items-center w-full h-6 sm:h-9">
                    <div className="bg-[#4f80ff] w-1/12 h-full"></div>
                    <div className="flex justify-center items-center border-r-2 border-black w-9/12 h-full">
                        <p className="">
                            Çelik
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-2/12">
                        <img src={tamnokta} alt="tamnokta" className="block w-2 " />
                    </div>
                </div>
                
                <div className="flex items-center justify-center" >
                    <div>
                        <div className="flex items-center gap-2">
                            <img src={tamnokta} alt="tamnokta" className="block w-2 " />
                            önerilir
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={yarimnokta} alt="yarimnokta" className="block w-2 " />
                            kabul edilebilir
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={bosnokta} alt="bosnokta" className="block w-2 " />
                            önerilmez
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/12 border border-black flex flex-col justify-center items-center">
                <img src={alfa} alt="alfa" className="p-1" />
                <img src={formhadin} alt="formhadin" className="p-1" />
                <img src={ruzgar} alt="ruzgar" className="p-1" />
                <img src={nem} alt="nem" className="p-1" />
                <img src={tiain} alt="tiain" className="p-1" />
            </div>

            <div className="w-6/12 border border-black">
                <div className="border flex w-full" >
                    <div className="" >
                        <img src={matkapucucizim} alt="matkapucucizim" className="block" />
                        <img src={matkapucuorjinal} alt="matkapucuorjinal" className="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={matkapucununalti} alt="matkapucununalti" className="block " />
                    </div>
                </div>
                <div className="flex flex-wrap w-full gap-y-2 items-center p-2" >
                    <img src={genelmuhendislik} alt="genelmuhendislik" className="block w-20 sm:w-1/3" />
                    <img src={otomotiv} alt="otomotiv" className="block w-20 sm:w-1/3" />
                    <img src={kalipcilik} alt="kalipcilik" className="block w-20 sm:w-1/3" />
                    <img src={raylisistem} alt="raylisistem" className="block w-20 sm:w-1/3" />
                    <img src={savunma} alt="savunma" className="block w-20 sm:w-1/3" />
                </div>
            </div>

            <div className="w-1/12 border border-black flex flex-col items-center justify-center">
                <img src={delikkesit1} alt="delikkesit1" className="block" />
                <img src={delikkesit2} alt="delikkesit2" className="block" />
                <img src={delikkesit3} alt="delikkesit3" className="block" />
                <img src={delikkesit4} alt="delikkesit4" className="block" />
                <img src={delikkesit5} alt="delikkesit5" className="block" />
            </div>
        </section>
    );
}

export default K3DFSerisi;