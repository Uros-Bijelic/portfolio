import { FloatingNav } from '@/components/layout/FloatingNavbar';
import Footer from '@/components/layout/Footer';

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
    <div className="mx-au h-full min-h-screen ">
      {/* <Header /> */}
      <FloatingNav navItems={navItems} />
      <main className="mx-auto flex h-full max-w-screen-lg flex-1 px-4 py-40 md:px-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
