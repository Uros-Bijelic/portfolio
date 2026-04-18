import LandingPage from '@/components/landing/LandingPage';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HeaderMobile from '@/components/layout/HeaderMobile';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050506]">
      <Header isAlwaysVisible />
      <HeaderMobile isAlwaysVisible />
      <LandingPage />
      <Footer />
    </div>
  );
}
