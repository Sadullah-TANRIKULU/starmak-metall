import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Anasayfa from "../pages/Anasayfa";
import DelikIsleme from "../pages/DelikIsleme";
import DisBasiIlerleme from "../pages/DisBasiIlerleme";
import Galeri from "../pages/Galeri";
import Haberler from "../pages/Haberler";
import HaberSayfasi from "../pages/HaberSayfasi";
import Hakkimizda from "../pages/Hakkımızda";
import Iletisim from "../pages/Iletisim";
import InsanKaynaklari from "../pages/InsanKaynaklari";
import K3DFSerisi from "../pages/K3DFSerisi";
import KalitePolitikamiz from "../pages/KalitePolitikamiz";
import Kataloglarimiz from "../pages/Kataloglarimiz";
import KesmeDegerleri from "../pages/KesmeDegerleri";
import KvkkAydinlatma from "../pages/KvkkAydinlatma";
import OzelTakim from "../pages/OzelTakim";
import TestVideolari from "../pages/TestVideolari";
import UretimKapasitemiz from "../pages/UretimKapasitemiz";

const AppRouter = () => {
    return (
      <section className="appRouter relative">
        <Header />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
          <Route path="kalitepolitikamiz" element={<KalitePolitikamiz />} />
          <Route path="kvkkaydinlatma" element={<KvkkAydinlatma />} />
          <Route path="ozeltakim" element={<OzelTakim />} />
          <Route path="uretimkapasitemiz" element={<UretimKapasitemiz />} />
          <Route path="testvideolari" element={<TestVideolari />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="haberler" element={<Haberler />} />
          <Route path="habersayfasi" element={<HaberSayfasi />} />
          <Route path="delikisleme" element={<DelikIsleme />} />
          <Route path="k3dfserisi" element={<K3DFSerisi />} />
          <Route path="kesmedegerleri" element={<KesmeDegerleri />} />
          <Route path="disbasiilerleme" element={<DisBasiIlerleme />} />
          <Route path="kataloglarimiz" element={<Kataloglarimiz />} />
          <Route path="insankaynaklari" element={<InsanKaynaklari />} />
          <Route path="iletisim" element={<Iletisim />} />
        </Routes>
        <Footer />
      </section>
    );
  };
  
  export default AppRouter;