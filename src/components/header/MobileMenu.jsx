import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-4 pb-4 bg-white">
        <NavLinks onClick={closeMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
