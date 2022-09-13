import img1kataloglar from "../assets/images/kataloglarimiz/img1kataloglar.png";
import img2kataloglar from "../assets/images/kataloglarimiz/img2kataloglar.png";
import img3kataloglar from "../assets/images/kataloglarimiz/img3kataloglar.png";
import img4kataloglar from "../assets/images/kataloglarimiz/img4kataloglar.png";
import indirIcon from "../assets/images/kataloglarimiz/indirIcon.png";


const Kataloglarimiz = () => {
    return ( 
        <section className="text-center" >
            <h1 className="font-bold m-4" >Kataloglarımız</h1>
            <div className="flex flex-wrap gap-2 justify-center"  >
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img1kataloglar} alt="img1kataloglar" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Tornalama</h2>
                        <div className="w-full bg-[#ffd500] py-2 flex gap-2 justify-center items-center" ><img src={indirIcon} alt="indirIcon" /> İndir</div>
                    </div>
                </div>
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img2kataloglar} alt="img2kataloglar" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Frezeleme</h2>
                        <div className="w-full bg-[#ffd500] py-2 flex gap-2 justify-center items-center" ><img src={indirIcon} alt="indirIcon" /> İndir</div>
                    </div>
                </div>
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img3kataloglar} alt="img3kataloglar" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Kesme & Kanal</h2>
                        <div className="w-full bg-[#ffd500] py-2 flex gap-2 justify-center items-center" ><img src={indirIcon} alt="indirIcon" /> İndir</div>
                    </div>
                </div>
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img4kataloglar} alt="img4kataloglar" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Delme</h2>
                        <div className="w-full bg-[#ffd500] py-2 flex gap-2 justify-center items-center" ><img src={indirIcon} alt="indirIcon" /> İndir</div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Kataloglarimiz;