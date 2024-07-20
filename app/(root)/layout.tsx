import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="mx-au h-full min-h-screen ">
      <Header />
      <main className="mx-auto flex h-full max-w-screen-lg flex-1 px-4 py-40 md:px-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
