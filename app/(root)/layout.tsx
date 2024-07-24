import Footer from '@/components/layout/Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto h-full min-h-screen">
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
