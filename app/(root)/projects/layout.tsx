import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface ILayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Work',
    link: '/projects',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="mx-auyo h-full min-h-screen">
      <Header />
      {/* <FloatingNav navItems={navItems} /> */}
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
