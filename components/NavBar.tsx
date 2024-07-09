'use client';

interface IProps {}

const NavBar: React.FC<IProps> = (props) => {
  return (
    <nav className="flex-center bg-[#00000066] py-6 px-2 border border-[#A4ADFF1A] w-[452px] rounded-full relative z-10">
      <ul className="flex gap-10">
        <li
          onClick={() => alert('aaaaaaaaaaaaaaaaaaaaaaa')}
          className="p-medium text-white-800 hover:text-white-100 cursor-pointer transition-colors"
        >
          Home
        </li>
        <li className="p-medium text-white-800 hover:text-white-100 cursor-pointer transition-colors">
          Work
        </li>
        <li className="p-medium text-white-800 hover:text-white-100 cursor-pointer transition-colors">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
