import Header from '@/components/layout/Header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="mx-auyo h-full min-h-screen">
      <Header />
      {/* <FloatingNav navItems={navItems} /> */}
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
