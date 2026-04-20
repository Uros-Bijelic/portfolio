import LandingPage from '@/components/landing/LandingPage';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HeaderMobile from '@/components/layout/HeaderMobile';

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_38%),#050506]">
      <Header />
      <HeaderMobile />
      <LandingPage />
      <Footer />
    </div>
  );
}
