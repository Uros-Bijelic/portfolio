'use client';

interface IProps {}

const NavBar: React.FC<IProps> = (props) => {
  return (
    <nav className="flex-center relative z-10 w-[452px] rounded-full border border-[#A4ADFF1A] bg-[#00000066] px-2 py-6">
      <ul className="flex gap-10">
        <li
          onClick={() => alert('aaaaaaaaaaaaaaaaaaaaaaa')}
          className="p-medium cursor-pointer text-white-800 transition-colors hover:text-white-100"
        >
          Home
        </li>
        <li className="p-medium cursor-pointer text-white-800 transition-colors hover:text-white-100">
          Work
        </li>
        <li className="p-medium cursor-pointer text-white-800 transition-colors hover:text-white-100">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
