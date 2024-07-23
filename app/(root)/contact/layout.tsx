import Header from '@/components/layout/Header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto h-auto min-h-screen">
      <Header isAlwaysVisible />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
