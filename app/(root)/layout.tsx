import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="mx-au h-full min-h-screen border">
      <Header />
      <main className="mx-auto flex h-full max-w-screen-lg flex-1 pt-40">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
