import img1uretimkap from "../assets/images/uretimkapasitemiz/img1uretimkap.png";
import img2uretimkap from "../assets/images/uretimkapasitemiz/img2uretimkap.png";
import img3uretimkap from "../assets/images/uretimkapasitemiz/img3uretimkap.png";
import img4uretimkap from "../assets/images/uretimkapasitemiz/img4uretimkap.png";
import img5uretimkap from "../assets/images/uretimkapasitemiz/img5uretimkap.png";


const UretimKapasitemiz = () => {
    return (
        <section className="text-center" >
            <h1 className="font-bold m-4" >Üretim Kapasitemiz</h1>
            <div className="flex flex-wrap gap-2 justify-center"  >
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img1uretimkap} alt="img1uretimkap" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Ürün Adı</h2>
                        <p>Yıllık Kapasite</p>
                        <p className="w-full bg-[#ffd500] py-2" >Adet</p>
                    </div>
                </div>
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img2uretimkap} alt="img2uretimkap" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Ürün Adı</h2>
                        <p>Yıllık Kapasite</p>
                        <p className="w-full bg-[#ffd500] py-2" >Adet</p>
                    </div>
                </div>
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img3uretimkap} alt="img3uretimkap" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Ürün Adı</h2>
                        <p>Yıllık Kapasite</p>
                        <p className="w-full bg-[#ffd500] py-2" >Adet</p>
                    </div>
                </div>
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img4uretimkap} alt="img4uretimkap" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Ürün Adı</h2>
                        <p>Yıllık Kapasite</p>
                        <p className="w-full bg-[#ffd500] py-2" >Adet</p>
                    </div>
                </div>
                <div className="card w-40 sm:w-80 bg-white shadow-xl rounded-none">
                    <figure>
                        <img src={img5uretimkap} alt="img5uretimkap" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center">Ürün Adı</h2>
                        <p>Yıllık Kapasite</p>
                        <p className="w-full bg-[#ffd500] py-2" >Adet</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UretimKapasitemiz;