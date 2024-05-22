import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-5">
      <div className="flex-initial">
        <Menu />
      </div>
      <h1 className="flex-grow text-[#7D7D7D] font-medium text-2xl hover:cursor-pointer text-center">
        <button className=" py-2 px-2 rounded-md transition-all hover:bg-[#F4F4F4]">
          <a href="https://linktr.ee/a.ramadani" target="_blank">
            RamAI
          </a>
        </button>
      </h1>
      <div className="flex-initial"></div>
    </nav>
  );
};

export default Navbar;
