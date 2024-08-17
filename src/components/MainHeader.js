import Logo from "./Logo";
import Navigation from "./Navigation";

function MainHeader() {
  return (
    <div className="flex items-center justify-between py-6  z-20">
      <Navigation />
      <Logo />
    </div>
  );
}

export default MainHeader;
