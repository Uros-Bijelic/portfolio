import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HeaderMobile from '@/components/layout/HeaderMobile';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto h-full min-h-screen">
      <Header />
      <HeaderMobile />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
